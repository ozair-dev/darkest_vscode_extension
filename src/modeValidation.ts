import * as vscode from 'vscode';


export function gatherModes(document: vscode.TextDocument){
  const modes:string[] = [];
  for (let i = 0; i < document.lineCount; i++) {
    const line = document.lineAt(i);
    const lineText = line.text.trim();
    
    if (i === 0 && lineText.startsWith("// @darkest-nocheck")) break;
    else if (lineText.startsWith("// @darkest-ignore")) {
      i++;
      continue;
    }
    if (!lineText || lineText.startsWith("//")) continue;

    
    const keyword = line.text.match(/^\w+(?=:)/)?.[0]!;

    if(keyword == 'mode'){
      const id = line.text.match(/\.id\s+(\w+)/)?.[1]!;
      modes.push(id);
    }
  }
  return modes;
}