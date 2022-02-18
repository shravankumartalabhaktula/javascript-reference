let a = 0;
let b = 0;
let c = 1;
let num = 10;
let fibo = "";

for(var i=0; i<num; i++) {
  a = b;
  b = c;
  c = a + b;
  fibo += a+" ";
}

console.log(fibo);