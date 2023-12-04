function findFirstRepeated(gifts) {
  let repeatedId = {
    indexFirst: -1,
    indexSecond: -1,
    number: -1,
  };
  for (let i = 0; i < gifts.length; i++) {
    const curr = gifts[i];
    for (let k = i + 1; k < gifts.length; k++) {
      const repeated = gifts[k];
      if (curr === repeated) {
        if (repeatedId.indexSecond === -1 || k < repeatedId.indexSecond) {
          repeatedId = {
            indexFirst: i,
            indexSecond: k,
            number: curr,
          };
        }
      }
    }
  }

  return repeatedId.number;
}

const vals = [2, 1, 3, 5, 3, 2];
const first = findFirstRepeated(vals);
