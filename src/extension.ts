import * as vscode from "vscode";
import { GAME_MECHANICS_SCHEMA } from "./game-mechanics-schema";
import { throttle } from "./utils/throttle";

export function activate(context: vscode.ExtensionContext) {
  const collection = vscode.languages.createDiagnosticCollection("darkest");
  if (vscode.window.activeTextEditor) {
    throttledUpdateDiagnostics(
      vscode.window.activeTextEditor.document,
      collection
    );
  }
  context.subscriptions.push(
    vscode.window.onDidChangeActiveTextEditor((editor) => {
      if (editor) {
        throttledUpdateDiagnostics(editor.document, collection);
      }
    })
  );
  context.subscriptions.push(
    vscode.workspace.onDidChangeTextDocument((event) => {
      if (event.document) {
        throttledUpdateDiagnostics(event.document, collection);
      }
    })
  );
}

export function deactivate() {}

function updateDiagnostics(
  document: vscode.TextDocument,
  collection: vscode.DiagnosticCollection
): void {
  collection.clear();

  if (document.languageId === "darkest") {
    const diagnostics: vscode.Diagnostic[] = [];
    for (let i = 0; i < document.lineCount; i++) {
      const line = document.lineAt(i);
      const lineText = line.text.trim();

      if (i === 0 && lineText.startsWith("// @darkest-nocheck")) {
        break;
      } else if (lineText.startsWith("// @darkest-ignore")) {
        i++;
        continue;
      }

      if (!lineText || lineText.startsWith("//")) {
        continue;
      }

      const isLineValid = /^\w+:(\s+\.[a-zA-Z_]+(\s[^\s.][^\s]*)*)+$/.test(
        lineText
      );
      if (!isLineValid) {
        const diagnostic = new vscode.Diagnostic(
          line.range,
          `Invalid syntax: \`${line.text}\``,
          vscode.DiagnosticSeverity.Error
        );
        diagnostics.push(diagnostic);
        continue;
      }

      const keyword = line.text.match(/^\w+(?=:)/)?.[0]!;

      if (!GAME_MECHANICS_SCHEMA[keyword]) {
        const diagnostic = new vscode.Diagnostic(
          line.range,
          `Unknown keyword: \`${keyword}\``,
          vscode.DiagnosticSeverity.Error
        );
        diagnostics.push(diagnostic);
        continue;
      }

      const paramsAndValues = lineText.match(
        /(\.[a-zA-Z_]+)(\s[^\s.][^\s]*)*/g
      )!;

      const missingParams = Object.entries(GAME_MECHANICS_SCHEMA[keyword])
        .filter(([, s]) => "required" in s && s.required)
        .filter(([param]) =>
          paramsAndValues.every(
            (paramAndValue) => !paramAndValue.startsWith(param)
          )
        );

      if (missingParams.length > 0) {
        const missingParamsString = missingParams
          .map(([param]) => `\`${param}\``)
          .join(", ");
        const diagnostic = new vscode.Diagnostic(
          line.range,
          `Missing required parameters: ${missingParamsString}`,
          vscode.DiagnosticSeverity.Error
        );
        diagnostics.push(diagnostic);
        continue;
      }

      paramsAndValues?.forEach((paramAndValue) => {
        const [param, ...values] = paramAndValue.split(" ");
        const index = line.text.indexOf(paramAndValue);
        if (!GAME_MECHANICS_SCHEMA[keyword][param]) {
          const diagnostic = new vscode.Diagnostic(
            new vscode.Range(
              line.lineNumber,
              index,
              line.lineNumber,
              index + paramAndValue.length
            ),
            `Unknown parameter \`${param}\` for ${keyword}`,
            vscode.DiagnosticSeverity.Error
          );
          diagnostics.push(diagnostic);
        } else {
          const expectedType = GAME_MECHANICS_SCHEMA[keyword][param].type;

          const allowedValues =
            GAME_MECHANICS_SCHEMA[keyword][param].allowed_values;
          const value = values.join(" ").trim();
          const isValid = validator[expectedType](value);
          const isAllowed = isAllowedValue(value, allowedValues);
          if (!isValid || !isAllowed) {
            const diagnostic = new vscode.Diagnostic(
              new vscode.Range(
                line.lineNumber,
                index,
                line.lineNumber,
                index + paramAndValue.length
              ),
              `Invalid value \`${value}\` for parameter \`${param}\` of type \`${expectedType}\`. ${
                !isAllowed
                  ? `Allowed values are: \`${allowedValues?.join(", ")}\``
                  : ""
              }`,
              vscode.DiagnosticSeverity.Error
            );
            diagnostics.push(diagnostic);
          }
        }
      });
    }
    collection.set(document.uri, diagnostics);
  }
}

const throttledUpdateDiagnostics = throttle(
  (document: vscode.TextDocument, collection: vscode.DiagnosticCollection) => {
    updateDiagnostics(document, collection);
  },
  1000
);

const validator = {
  string: (value: string) => {
    return /^('[^']*'|"[^"]*"|[^\s]+)$/.test(value);
  },
  list: (value: string) => {
    return value.split(/\s+/).every((item) => {
      return validator.string(item);
    });
  },
  boolean: (value: string) => {
    return /^(true|false)$/.test(value);
  },
  number: (value: string) => {
    return /^[+-]?\d+(\.\d+)?%?$/.test(value);
  },
  number_list: (value: string) => {
    return value.split(/\s+/).every((item) => {
      return validator.number(item);
    });
  },
};

const isAllowedValue = (value: any, allowedValues?: any[]): boolean => {
  if (!allowedValues) {
    return true;
  }
  const normalizedValue = value.replace(/['"]/g, "");
  return allowedValues.map((v) => v.toString()).includes(normalizedValue);
};
