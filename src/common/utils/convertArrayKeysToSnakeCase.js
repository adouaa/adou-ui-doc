function camelToSnake(name) {
  return name.replace(/([a-z])([A-Z])/g, "$1_$2").toLowerCase();
}

function convertKeysToSnakeCase(obj) {
  return Object.fromEntries(
    Object.entries(obj).map(([key, value]) => [camelToSnake(key), value])
  );
}

function convertArrayKeysToSnakeCase(arr) {
  return arr.map((item) => convertKeysToSnakeCase(item));
}
export default convertArrayKeysToSnakeCase;
