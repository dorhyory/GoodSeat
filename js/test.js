// var arrayLength = 33;
// var arrayRd = [];
// var result;
// while(true) { 
//   result = Math.floor(Math.random()*arrayLength+1);
//   if(arrayRd.indexOf(result) == -1) {
//     arrayRd.push(result);
//     if(arrayRd.length == arrayLength) break;
//   }
// }
// document.write(arrayRd, "<hr/>");

function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
var pArray = [];
function bclick() {
  var getNameElement = document.getElementById("nameText");
  var getGenderM = document.getElementById("genderM");
  var getGenderW = document.getElementById("genderW");
  var getName = getNameElement.value;
  if(getGenderM.checked == true) {
    pArray.push(new Person(getName, "m"));
  } else if(getGenderW.checked == true) {
    pArray.push(new Person(getName, "w"));
  } else {
    alert("gender not checked");
  }
  getNameElement.value = "";
}

  