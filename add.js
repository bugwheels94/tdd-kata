export function add(string) {
  let delimeter = ",";
  if (!string?.trim()) return 0;
  if (string.startsWith("//")) {
    delimeter = string[2];
    string = string.substring(3);
  }
  return string.split(new RegExp(`${delimeter}|\n`)).reduce((acc, number) => {
    return (Number.isNaN(number) ? 0 : Number(number)) + acc;
  }, 0);
}
