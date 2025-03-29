export function add(string) {
  let delimeter = ",";
  if (!string?.trim()) return 0;
  if (string.startsWith("//")) {
    delimeter = string[2];
    string = string.substring(3);
  }
  const result = string
    .split(new RegExp(`${delimeter}|\n`))
    .reduce((acc, number) => {
      const currentNumber = Number.isNaN(number) ? 0 : Number(number);
      if (currentNumber < 0) {
        return Array.isArray(acc) ? [...acc, currentNumber] : [currentNumber];
      }
      if (Array.isArray(acc)) return acc;
      return currentNumber + acc;
    }, 0);
  if (Array.isArray(result))
    throw new Error(`negative numbers not allowed ${result.join(",")}`);
  return result;
}
