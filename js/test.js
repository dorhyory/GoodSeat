var arrayLength = 33;
var arrayRd = [];
var result;
while(true) { 
  result = Math.floor(Math.random()*arrayLength+1);
  if(arrayRd.indexOf(result) == -1) {
    arrayRd.push(result);
    if(arrayRd.length == arrayLength) break;
  }
}
document.write(arrayRd, "<hr/>");

