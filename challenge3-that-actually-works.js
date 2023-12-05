function findNaughtyStep(original, modified) {
  let i = 0;

  while (i < original.length || i < modified.length) {
    if (original[i] !== modified[i]) {
      return original.length > modified.length ? original[i] : modified[i];
    }
    i += 1;
  }

  return "";
}
