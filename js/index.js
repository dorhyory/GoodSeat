var elementlist;
var namelist = ["123", "456", "789", "aaa", "bbb"];

function setRandomSeat() {
  elementlist = document.querySelectorAll("#class_seat li");
  
  var rdArray = [];
  var rdResult;
  while(true) {
    rdResult = Math.floor(Math.random()*namelist.length);
    if(rdArray.indexOf(rdResult) === -1) {
      rdArray.push(rdResult);
      if(rdArray.length === namelist.length) break;
    }
  }

  for(var i in rdArray) {
    elementlist[i].innerHTML = namelist[rdArray[i]];
  }
}
