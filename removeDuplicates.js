
// Normal
function removeDuplicate(str, n) {
  var index = 0;
  for (var i = 0; i < n; i++) {
    var j;
    for (j = 0; j < i; j++) {
      if (str[i] == str[j]) {
        break;
      }
    }
    if (j == i) {
      str[index++] = str[i];
    }
  }
  return str.join("").slice(str, index);
}

// Using Set
function removeDuplicateUsingSet(str, n) {
  var s = new Set();
  for(var i = 0; i < n; i++) {
    s.add(str[i]);
  }
  for(const v of s) {
    console.log(v);
  }
}

// Using Sort
function removeDuplicateUsingSort(string)
{
   return string.split('')
    .filter(function(item, pos, self)
    {
      return self.indexOf(item) == pos;
    }
   ).join('');
}

var str = "geeksforgeeks".split("");
var n = str.length;
console.log(removeDuplicate(str, n));
removeDuplicateUsingSet(str, n);
console.log(removeDuplicateUsingSort("geeksforgeeks"));