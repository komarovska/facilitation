var linesRearrange = function() {
    document.getElementById('line1').style.animationName = 'move1';
    document.getElementById('line3').style.animationName = 'move2';
    document.getElementById('line4').style.animationName = 'move1';
    document.getElementById('line5').style.animationName = 'move2';
}

var linesReset = function() {
    document.getElementById('line1').style.animationName = '';
    document.getElementById('line3').style.animationName = '';
    document.getElementById('line4').style.animationName = '';
    document.getElementById('line5').style.animationName = '';
}


var menuDrop = function() {
        document.getElementById("hidden-menu").style.display = 'block';
        document.getElementById("item1").style.display = 'block';
        document.getElementById("item2").style.display = 'block';
        document.getElementById("item3").style.display = 'block';
        document.getElementById("item4").style.display = 'block';
        document.getElementById("small-shown").style.display = 'none';
        document.getElementById("small-hidden").style.display = 'block';
    }
    
    
var menuHide = function() {
   
        document.getElementById("item1").style.display = 'none';
        document.getElementById("item2").style.display = 'none';
        document.getElementById("item3").style.display = 'none';
        document.getElementById("item4").style.display = 'none';
        document.getElementById("hidden-menu").style.display = 'none';
        document.getElementById("small-shown").style.display = 'block';
        document.getElementById("small-hidden").style.display = 'none';
       
}


/*var hideEverything = function() {
    if (x.matches) { // If media query matches
            document.getElementById("small-shown").style.display = 'block';
            document.getElementById("small-hidden").style.display = 'none';
        } else {
            document.getElementById("small-shown").style.display = 'none';
            document.getElementById("small-hidden").style.display = 'none';
 }
}
var x = window.matchMedia("(max-width: 580px)")
hideEverything(x) // Call listener function at run time
x.addListener(hideEverything)*/



var revealInfo = function() {
    document.getElementById('overlay').style.transform = 'none';
    
}

var hideInfo = function() {
    document.getElementById('overlay').style.transform = 'translateY(98%)';
}

var revealInfo2 = function() {
    document.getElementById('overlay2').style.transform = 'none';
    
}

var hideInfo2 = function() {
    document.getElementById('overlay2').style.transform = 'translateY(98%)';
}

var x = document.getElementsByClassName('modal');
var y = document.getElementsByClassName('services__item__btn');


var revealModal1 = function() {
    document.getElementById('id0').style.display='block';
    
}
var revealModal2 = function() {
    document.getElementById('id1').style.display='block';
    
}
var revealModal3 = function() {
    document.getElementById('id2').style.display='block';
    
}
var revealModal4 = function() {
    document.getElementById('id3').style.display='block';
    
}



var hideModal = function() {
    document.getElementById('id0').style.display='none';
    document.getElementById('id1').style.display='none';
    document.getElementById('id2').style.display='none';
    document.getElementById('id3').style.display='none';
}

"use strict";
var modals = document.getElementsByClassName('modal');

window.onclick = function(event) {

for (let i=0; i < modals.length; i++) {
    let modal = document.getElementById(modals[i].id)
    if (event.target == modal) {
        modal.style.display = "none";
    }
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