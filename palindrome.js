let original = "lolol";
let reverse = "";

let strLen = original.length;

for( var i=original.length - 1; i>=0; i--) {
  reverse += original.charAt(i);
}

if (original === reverse) {
  console.log("Palindrome");
} else {
  console.log("Not a Palindrome");
}