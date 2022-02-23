/**
 * Write an efficient function to return maximum occurring
 * character in the input string
 * e.g., if input string is “test” then function should return ‘t’.
 */

let ASCII_SIZE = 256;

function getMaxOccurringChar(str) {
  let count = new Array(ASCII_SIZE);
  for (let i = 0; i < ASCII_SIZE; i++) {
    count[i] = 0;
  }

  let len = str.length;

  for (let i = 0; i < len; i++) {
    count[str[i].charCodeAt(0)] += 1;
  }

  let max = -1;
  let result = " ";

  for (let i = 0; i < len; i++) {
    if (max < count[str[i].charCodeAt(0)]) {
      max = count[str[i].charCodeAt(0)];
      result = str[i];
    }
  }

  return result;
}

let str = "sample sterineg";

console.log(getMaxOccurringChar(str));
