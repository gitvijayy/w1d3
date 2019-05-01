function countLetters(string) {
  var arr = string.replace(/\s+/g, '').split("");
  var countedLetters = {};

  for (var i = 0; i < arr.length; i++) {
    var count = 0;

    for (var j = 0; j < arr.length; j++) {
      if (arr[i] == arr[j]) {
        count += 1;
      }
      countedLetters[arr[i]] = count;
    }

  }

  return countedLetters;
}

console.log(countLetters("lighthouse in the house"));