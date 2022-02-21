let n = 153;
let c = 0;
let a;
let temp;
temp = n;

while (n > 0) {
  a = n % 10;
  n = parseInt(n / 10);
  c = c + (a * a * a);
}

if (temp === c) {
  console.log("Armstrong: ", c);
} else {
  console.log("Not an Armstrong: ", c);
}