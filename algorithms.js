// Binary Search Algorithm
const handleBinarySearch = (arr, val) => {
  let guess,
    min = 0,
    max = arr.length - 1;

  while (min <= max) {
    guess = Math.floor((min + max) / 2);

    if (arr[guess] === val) {
      return guess;
    } else if (arr[guess] < val) {
      min = guess + 1;
    } else {
      max = guess - 1;
    }
  }
  return -1;
};
