let str = "Sakkett";

for(var i=0; i<str.length; i++) {
  for(var j=i+1; j<str.length; j++) {
    if (str.charAt(i) === str.charAt(j)){
      console.log("Duplicates: ", str.charAt(j));
      break;
    }
  }
}