

document.write(`
<div class="slideshow-container">

    <a class="prev" onclick="plusSlides(-1)">&#10094;</a>

    <div class="photos">

        <div class="mySlides fade">
            <div class="numbertext">1 / 12</div>
            <img src="imgs/gallery_1.jpeg" style="width:100%;height=100%">
        </div>

        <div class="mySlides fade">
            <div class="numbertext">2 / 12</div>
            <img src="imgs/gallery_2.jpeg" style="width:100%;height=100%">
        </div>

        <div class="mySlides fade">
            <div class="numbertext">3 / 12</div>
            <img src="imgs/gallery_3.jpeg" style="width:100%;height=100%">
        </div>

        <div class="mySlides fade">
            <div class="numbertext">4 / 12</div>
            <img src="imgs/gallery_4.jpg" style="width:100%;height=100%">
        </div>

        <div class="mySlides fade">
            <div class="numbertext">5 / 12</div>
            <img src="imgs/gallery_5.jpg" style="width:100%;height=100%">
        </div>

        <div class="mySlides fade">
            <div class="numbertext">6 / 12</div>
            <img src="imgs/gallery_6.jpg" style="width:100%;height=100%">
        </div>

        <div class="mySlides fade">
            <div class="numbertext">7 / 12</div>
            <img src="imgs/gallery_7.jpg" style="width:100%;height=100%">
        </div>

        <div class="mySlides fade">
            <div class="numbertext">8 / 12</div>
            <img src="imgs/gallery_8.jpg" style="width:100%;height=100%">
        </div>

        <div class="mySlides fade">
            <div class="numbertext">9 / 12</div>
            <img src="imgs/gallery_9.jpg" style="width:100%;height=100%">
        </div>

        <div class="mySlides fade">
            <div class="numbertext">10 / 12</div>
            <img src="imgs/gallery_10.jpg" style="width:100%;height=100%">
        </div>

        <div class="mySlides fade">
            <div class="numbertext">11 / 12</div>
            <img src="imgs/gallery_11.jpg" style="width:100%;height=100%">
        </div>
        
        <div class="mySlides fade">
            <div class="numbertext">12 / 12</div>
            <img src="imgs/gallery_12.jpg" style="width:100%;height=100%">
        </div>

    </div>

    <a class="next" onclick="plusSlides(1)">&#10095;</a>

</div>
<br>

<div class="dots" style="text-align:center">
  <span class="dots-container">
    <span class="dot" onclick="currentSlide(1)"></span> 
    <span class="dot" onclick="currentSlide(2)"></span> 
    <span class="dot" onclick="currentSlide(3)"></span> 
    <span class="dot" onclick="currentSlide(4)"></span> 
    <span class="dot" onclick="currentSlide(5)"></span> 
    <span class="dot" onclick="currentSlide(6)"></span> 
    <span class="dot" onclick="currentSlide(7)"></span> 
    <span class="dot" onclick="currentSlide(8)"></span> 
    <span class="dot" onclick="currentSlide(9)"></span> 
    <span class="dot" onclick="currentSlide(10)"></span> 
    <span class="dot" onclick="currentSlide(11)"></span> 
    <span class="dot" onclick="currentSlide(12)"></span> 
  </span>
</div>
`);

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
  var dots = document.getElementsByClassName("dot");
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
}