export function createRandomSet(amount) {
  const data = [];

  for (let index = 0; index < amount / 2; index++) {
    data.push(index, index);
  }
  const rendomData = [];

  while (rendomData.length < amount) {
    const randomIdx = getRandom(data.length);
    const randomEl = data[randomIdx];
    data.splice(randomIdx, 1);
    rendomData.push(randomEl);
  }

  return rendomData;
}

function getRandom(num) {
  return Math.floor(Math.random() * num);
}
