
function setRamdomSeat() {
  var seatList = document.querySelectorAll(".sections li");
  for(i=0; i<seatList.length; i++) {
    seatList[i].innerHTML = i + 1;
  }
}
