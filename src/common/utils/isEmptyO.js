function isEmptyO(obj) {
  return Object.keys(obj ?? {}).length === 0;
}

export default isEmptyO;
