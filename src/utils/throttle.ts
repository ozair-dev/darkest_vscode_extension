export function throttle<T extends (...args: any[]) => any>(
  func: T,
  delay: number
): (...args: Parameters<T>) => void {
  let lastCall = 0;
  let timeoutId: NodeJS.Timeout | null = null;

  return function (...args: Parameters<T>) {
    const now = Date.now();

    if (lastCall && now < lastCall + delay) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        lastCall = now;
        func(...args);
      }, delay - (now - lastCall));
    } else {
      lastCall = now;
      func(...args);
    }
  };
}
