let string = "One two       three\n four\tfive  ";
const OUT = 0;
const IN = 1;
let wc=0;
let state = OUT;

for (var i=0; i<string.length; i++) {
  if (string[i] == ' ' || string[i] == '\t' || string[i] == '\n') {
    state = OUT;
  } else if (state == OUT) {
    state = IN;
    wc++;
  }
}

console.log("Count: ", wc);
// console.log("Using Split: ", string.split('\\s+').length);