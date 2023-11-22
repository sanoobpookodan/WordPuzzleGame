export function calculateScore(word) {
  let score = word.length * 2;
  if (word.length > 5) {
    score += 5;
  }
  if (/[xwqz]/i.test(word)) {
    score += 5;
  }

  return score;
}

function createArrayBasedOnStringLength(strLength) {
  // Creating an array with a length equal to the given string length
  const newArray = Array.from({length: strLength}, (_, index) => {
    console.log(_);
    return index + 1;
  });
  console.log(Array.from('ABCDEFG'));

  console.log(newArray);
}
