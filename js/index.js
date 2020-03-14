var elementlist;
var pArray = [];

function setRandomSeat() {
  elementlist = document.querySelectorAll("#class_seat li");
  
  var rdArray = [];
  var rdResult;
  while(true) {
    rdResult = Math.floor(Math.random()*pArray.length);
    if(rdArray.indexOf(rdResult) === -1) {
      rdArray.push(rdResult);
      if(rdArray.length === pArray.length) break;
    }
  }

  for(var i in rdArray) {
    elementlist[i].innerHTML = pArray[rdArray[i]].name;
  }
}
function Person(name, gender) {
  this.name = name;
  this.gender = gender;
}
function setPerson() {
  var getNameElement = document.getElementById("nameText");
  var getGenderM = document.getElementById("genderM");
  var getGenderW = document.getElementById("genderW");
  var getName = getNameElement.value;
  if(getName != "") {
    if(getGenderM.checked == true) {
      pArray.push(new Person(getName, "m"));
    } else if(getGenderW.checked == true) {
      pArray.push(new Person(getName, "w"));
    } else {
      alert("gender not checked");
    }
  } else {
    alert("name not typed");
  }
  
  getNameElement.value = "";
}
