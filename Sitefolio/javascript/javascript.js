
/* Toggle between showing and hiding the navigation menu links when the user clicks on the hamburger menu / bar icon*/
function menuHamburguer() {
  var x = document.getElementById("mylinks");
 
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
    x.style.textDecoration = "none";
    x.className = "responsivo";
  }
}



var slideIndex = [1,1];
var slideId = ["mySlides1]
showSlides(1, 0);
showSlides(1, 1);

function plusSlides(n, no) {
  showSlides(slideIndex[no] += n, no);
}

function showSlides(n, no) {
  var i;
  var x = document.getElementsByClassName(slideId[no]);
  if (n = x.length) {slideIndex[no] = 1}    
  if (n < 1) {slideIndex[no] = x.length}
  for (i = 0; i < x.length; i++) {
     x[i].style.display = "none";  
  }
  x[slideIndex[no]-1].style.display = "block";  
}