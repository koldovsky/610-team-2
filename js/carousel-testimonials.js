const prev = document.querySelector(".prev");
const next = document.querySelector(".next");
const slides = document.querySelectorAll(".testimonials__carousel-item");
const dots = document.querySelectorAll(".dot");

let currentSlide = 0;

const activeSlide = n => {
    for (const slide of slides) {
        slide.classList.remove("carousel-active")
    }
    slides[n].classList.add("carousel-active");
}

const activeDot = n => {
    for (const dot of dots) {
        dot.classList.remove("dot-active")
    }
    dots[n].classList.add("dot-active");
}

const nextSlide = () => {
    if (currentSlide == slides.length - 1) {
        currentSlide = 0;
        activeSlide(currentSlide);
        activeDot(currentSlide);
    } else {
        currentSlide++;
        activeSlide(currentSlide);
        activeDot(currentSlide);
    }
}
const prevSlide = () => {
    if (currentSlide == 0) {
        currentSlide = slides.length - 1;
        activeSlide(currentSlide);
        activeDot(currentSlide);
    } else {
        currentSlide--;
        activeSlide(currentSlide);
        activeDot(currentSlide);
    }
}

next.addEventListener("click", nextSlide);
prev.addEventListener("click", prevSlide);
