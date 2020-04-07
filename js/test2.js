var exText = document.getElementById("mouseEx");
exText.addEventListener('mouseover', function() {
  exText.style.color = "green";
});
exText.addEventListener('mouseout', function() {
    exText.style.color = "black";
  });