const formateDigitsString = (
  string,
  minimumFractionDigits = 0,
  maximumFractionDigits = 0
) => {
  if (!string) return "";
  const stringToLocale = Number(string)
    .toLocaleString("ru-RU", {
      minimumFractionDigits: minimumFractionDigits,
      maximumFractionDigits: maximumFractionDigits,
    })
    .replace(",", ".");
  return stringToLocale;
};

export default formateDigitsString;
