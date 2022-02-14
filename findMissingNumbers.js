// Find missing numbers in an array

var numberArr = [1, 2, 3, 4, 5, 6, 7, 9, 10];

// (n*(n+1))/2

function findMissingNumber(arr) {
  var arraySum = (numberArr[numberArr.length - 1] * (numberArr[numberArr.length - 1] + 1)) / 2;
  arr.forEach(element => {
    arraySum -= element;
  });
  console.log("Missing number is: ", arraySum);
}

// findMissingNumber(numberArr);