var elementlist;
var pArray = [];
var MpArray = [];
var WpArray = [];
function setRandomSeat() {
  elementlist = document.querySelectorAll("#class_seat li");
  var rdArray = [];
  var rdResult;
  while(rdArray.length !== pArray.length) {
    rdResult = Math.floor(Math.random()*pArray.length);
    if(rdArray.indexOf(rdResult) === -1) {
      rdArray.push(rdResult);
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
  elementlist = document.querySelectorAll("#class_seat li");
  var getNameElement = document.getElementById("nameText");
  var getGenderM = document.getElementById("genderM");
  var getGenderW = document.getElementById("genderW");
  var getName = getNameElement.value;
  var getNameViewerElement = document.getElementById("viewer_namelist");
  if(getName != "") {
    if(getGenderM.checked == true) {
      pArray.push(new Person(getName, "m"));
      MpArray.push(new Person(getName, "m"));
      console.log(getNameViewerElement.innerHTML);
      getNameViewerElement.innerHTML = getNameViewerElement.innerHTML + getName + "(남) ";
    } else if(getGenderW.checked == true) {
      pArray.push(new Person(getName, "w"));
      WpArray.push(new Person(getName, "m"));
      console.log(getNameViewerElement.innerHTML);
      getNameViewerElement.innerHTML = getNameViewerElement.innerHTML + getName + "(여) ";
    } else {
      alert("gender not checked");
    }
  } else {
    alert("name not typed");
  }
  
  getNameElement.value = "";
}
