function countLetters(string) {

  var arr = string.split("");
  var countedLetters = {};

  for (var i = 0; i < arr.length; i++) {
    var counter = 0;

    if (arr[i] != " ") {

      countedLetters[arr[i]] = {count: 0, indices:[]};

      for (var j = 0; j < arr.length; j++) {

        if (arr[i] == arr[j]) {
          countedLetters[arr[i]]["indices"].push(j);
          counter += 1;
        }

      countedLetters[arr[i]]["count"] = counter;

      }

    }

  }

  return countedLetters;
}


console.log(countLetters("lighthouse in the house"));