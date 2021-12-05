function Winners() {
  var checkBox = document.getElementById("checkBox");
  var allElements= document.querySelectorAll('[id="hide"]');
  var allElements_win= document.querySelectorAll('[id="win"]');
  var new_display_value="block";
  var new_display_value_win="none";
  if (checkBox.checked == true){
    new_display_value = "none";
    new_display_value_win="block";
  }
  for(i=0;i<allElements.length;i++){
     allElements[i].style.display=new_display_value;
  }
  for(i=0;i<allElements_win.length;i++){
    allElements_win[i].style.display=new_display_value_win;
 }
}

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("demo");
  var captionText = document.getElementById("caption");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
  captionText.innerHTML = dots[slideIndex-1].alt;
}
