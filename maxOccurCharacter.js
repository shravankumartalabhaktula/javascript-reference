/**
 * Given a string containing lowercase characters. 
 * The task is to print the maximum occurring character in the input string. 
 * If 2 or more characters appear the same number of times, 
 * print the lexicographically (alphabetically) lowest (first) character.
 */


function getMaxOccurringCharacter(str) {

  let freq = new Array(26);

  for(let i=0; i<freq.length; i++) {
    freq[i] = 0;
  }

  let max = -1;
  let result = 0;
  let len = str.length;

  for(let i=0; i<len; i++) {
    if(str[i] != ' '){
      freq[str[i].charCodeAt(0) - 'a'.charCodeAt(0)]++;
    }
  }

  for(let i=0; i<26; i++) {
    if(max < freq[i]) {
      max = freq[i];
      result = String.fromCharCode(i + 'a'.charCodeAt(0));
    }
  }

  return result;

}

let str="sample program".split("");
console.log(str);
console.log(getMaxOccurringCharacter(str));