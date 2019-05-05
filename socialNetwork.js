var data = {
  f01: {
    name: "Alice",
    age: 15,
    follows: ["f02", "f03", "f04"]
  },
  f02: {
    name: "Bob",
    age: 20,
    follows: ["f05", "f06"]
  },
  f03: {
    name: "Charlie",
    age: 35,
    follows: ["f01", "f04", "f06"]
  },
  f04: {
    name: "Debbie",
    age: 40,
    follows: ["f01", "f02", "f03", "f05", "f06"]
  },
  f05: {
    name: "Elizabeth",
    age: 45,
    follows: ["f04"]
  },
  f06: {
    name: "Finn",
    age: 25,
    follows: ["f05"]
  }
};


function totalList(age) {
  var followList = {};
  var output = "";
  Object.keys(data).forEach(function(key) {
    var name = data[key]["name"];
    followList[name] = {};
    followList[name]["follows"] = following(data[key]["follows"],age);
    followList[name]["followers"] = follwedBy(key,age);
    });
  return output != "" ? output : followList;
}

function following(followId,age){
  var output = [];
  followId.forEach(function(id) {
    if(data[id]["age"] > age) {
      output.push(data[id]["name"]) ;
    }
  });
  return output;
}

function follwedBy(followId,age) {
  var output = [];
  for (var key in data) {
    if(data[key]["follows"].includes(followId) && data[key]["age"] > age) {
      output.push (data[key]["name"]);
    };
  };
  return output;
}


function mostFollowers(age,type) {
  var result = [];
  var list = totalList(age);
  for (var key in list) {
    counter = 0;
    for (var key1 in list) {
      if(list[key][type].length < list[key1][type].length) {
        counter = 1;
        break;
      };
    };
    if(counter === 0) {result.push(key)};
  };
  return result;
}


function followBack() {
  var followList = totalList(0);
  output = {};
  for (var key in followList) {
    output[key]=[];
    followList[key]["follows"].forEach(function(value) {
      if(!followList[key]["followers"].includes(value)) {
        output[key].push(value);
      }
    });
  }
  return output;
}


function reach() {
  list = totalList(0);
  var output = {};
  for (var keys in list) {
    sum = list[keys].followers.length;
    output[keys] = {};
    list[keys].followers.forEach(function(value) {
      if(list[value]["followers"].includes(value)) {
      sum += list[value]["followers"].length - 1 ;
      } else {
        sum += list[value]["followers"].length;
      }
    });
    output[keys] = sum;
  }
  return output;
}


console.log(totalList(50));
console.log();
console.log();
console.log(mostFollowers(0,"followers") + " has the most followers");
console.log();
console.log(mostFollowers(0,"follows") + " follow most people");
console.log();
console.log(mostFollowers(30,"followers") + " has the most followers over 30")
console.log();;
console.log(mostFollowers(30,"follows") + " follows most people over 30");
console.log();
console.log(followBack());
console.log();
console.log(reach());

// List everyone and for each of them, list the names of who they follow and who follows them//
// Identify who follows the most people//
// Identify who has the most followers
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)
// // }