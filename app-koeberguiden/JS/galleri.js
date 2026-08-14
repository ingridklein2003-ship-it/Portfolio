const slides = document.querySelectorAll(".hero-slide");
const dots = document.querySelectorAll(".dot");
const hero = document.querySelector(".hero-swiper");

let current = 0;

function nextSlide() {

    slides[current].classList.remove("active");
    dots[current].classList.remove("active");

    current++;

    if(current >= slides.length){
        current = 0;
    }

    slides[current].classList.add("active");
    dots[current].classList.add("active");
}

hero.addEventListener("click", nextSlide);

setInterval(nextSlide, 3000);