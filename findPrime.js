let number = 43;

let isPrime = true;
let temp;

for (var i = 2; i < number - 1; i++) {
  if (number % i == 0) {
    isPrime = false;
    break;
  }
}

if (isPrime) {
  console.log("Prime Number");
} else {
  console.log("Not a Prime Number");
}