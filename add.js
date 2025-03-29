export function add(string) {
  let delimeter = ",";
  if (!string?.trim()) return 0;
  const result = string.split(/,/).reduce((acc, number) => {
    const currentNumber = Number.isNaN(number) ? 0 : Number(number);
    return currentNumber + acc;
  }, 0);
  return result;
}
