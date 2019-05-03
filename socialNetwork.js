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


// List everyone and for each of them, list the names of who they follow and who follows them
function totalList() {

  var keys = Object.keys(data);
  var list = {};

  keys.forEach(function(key) {

    var name = data[key]["name"];
    list[name] = {};
    list[name]["follows"] = following(data[key]["follows"]);
    list[name]["followers"] = follwedBy(key);

  });

  console.log(list);

}

function following(followId){

  var output = followId.map (function(id) {
    return data[id]["name"];
  });

  return output;
}

function follwedBy(followId) {

  var output = [];

  for (var key in data) {

    if(data[key]["follows"].includes(followId)) {
      output.push (data[key]["name"]);
    };

  }

  return output;
}


totalList();



// Identify who follows the most people
// Identify who has the most followers
// Identify who has the most followers over 30
// Identify who follows the most people over 30
// List those who follow someone that doesn't follow them back
// List everyone and their reach (sum of # of followers and # of followers of followers)