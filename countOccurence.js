let word = ["welcome", "to", "geeks", "portal"];
let str = "geeksforgeeks is a computer science portal for geeks.";

function countWords(str, word) {
  let count = 0;
  count = str.split(word).length-1;
  console.log("Count: "+str, count);
}

countWords(str, "geeks");

console.log(str.split("geeks"));