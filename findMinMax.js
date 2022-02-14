var intArray = [10, 20, 30, 40, -1, -50, 100, 25];

function findMinMax(arr) {
  let min = 0;
  let max = 0;
  arr.forEach(element => {
    if (max < element) {
      max = element;
    } else if (min > element) {
      min = element;
    }
  });
  console.log("Min and Max numbers are: ", min, "and", max);
}

findMinMax(intArray);