let x = 45;
let y = 32;
let temp = 0;
console.log("Before Swap: X and Y are, ", x, y);
temp = x;
x = y;
y = temp;
console.log("After Swap: X and Y are, ", x, y);

// Now without using thrid variable
let a = 10;
let b = 20
console.log("Before Swap: X and Y are, ", a, b);
a = a + b;
b = a - b;
a = a - b;
console.log("After Swap: X and Y are, ", a, b);