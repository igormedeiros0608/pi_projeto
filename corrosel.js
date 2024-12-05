$(document).ready(function(){
    $('.mobile-btn').on('click',function(){
        $('.mobile-menu').toggleClass('active');
        $('.mobile-btn').find('i').toggleClass('fa-burger');
    })
})
let slideIndex = 0;

function showSlides() {
let slides = document.getElementsByClassName("slide");
for (let i = 0; i < slides.length; i++) {
slides[i].style.display = "none";  
}
slideIndex++;
if (slideIndex > slides.length) {slideIndex = 1}    
slides[slideIndex-1].style.display = "block";  
setTimeout(showSlides, 2000); // Muda de slide a cada 3 segundos
}

showSlides();
