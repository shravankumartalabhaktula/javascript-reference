let arr = [ 100,14, 46, 47, 94, 94, 52, 86, 36, 94, 89 ];

let largest = 0;
let secondLargest = 0;

for(var i=0; i<arr.length; i++) {
  if(arr[i] > largest) {
    secondLargest = largest;
    largest = arr[i];
  } else if (arr[i] > secondLargest) {
    secondLargest = arr[i];
  }
}

console.log("Largest: ", largest);
console.log("Second Largest: ", secondLargest);