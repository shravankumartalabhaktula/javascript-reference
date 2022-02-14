var stringArrayOne = ["cat", "mouse", "dog", "elephant"];
var stringArrayTwo = ["ant", "mosquito", "cat", "lion", "tiger", "dog"];

function findCommonStrings(strArr1, strArr2) {
  var commonStrings = [];
  strArr1.forEach(arr1 => {
    strArr2.forEach(arr2 => {
      if (arr1 === arr2) {
        commonStrings.push(arr1);
      }
    })
  });
  console.log("Common Strings: ", commonStrings);
}

// findCommonStrings(stringArrayOne, stringArrayTwo);