function findNaughtyStep(original, modified) {
  let naughtyStep = "";
  let originalArr = original.split("");
  let modifiedArr = modified.split("");

  if (originalArr.length > modifiedArr.length) {
    naughtyStep = originalArr
      .filter((step) => !modifiedArr.includes(step))
      .join("");
  } else if (modifiedArr.length > originalArr.length) {
    naughtyStep = modifiedArr
      .filter((step) => !originalArr.includes(step))
      .join("");
  } else {
    originalArr.forEach((step, idx) => {
      if (modified[idx] !== step) {
        naughtyStep = step;
      }
    });
  }
  return naughtyStep;
}
