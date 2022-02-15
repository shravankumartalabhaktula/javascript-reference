let str = "Shravan Kumar";
let reverse = "";
let stringLength = str.length;
console.log(stringLength);
for (var i=stringLength-1; i>=0; i--) {
  reverse = reverse + str[i];
}
console.log(reverse);