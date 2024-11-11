function snakeToCamel(name) {
  return name.replace(/_([a-z])/g, (match, letter) => letter.toUpperCase());
}

function convertKeysToCamelCase(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [snakeToCamel(key), value || ""])
  );
}

function convertArrayKeysToCamelCase(arr) {
  return arr.map((item) => convertKeysToCamelCase(item));
}

export default convertArrayKeysToCamelCase;
