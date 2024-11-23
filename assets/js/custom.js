let hamburger = document.querySelector(".hamburger");
let nav = document.querySelector(".header-menu");
let sun = document.querySelector(".iamsun");
let girl = document.querySelector(".super-girl");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("isactive");
  nav.classList.toggle("active");
  sun.classList.toggle("active");
  girl.classList.toggle("active");
});

const heroSwiper = new Swiper(".swiper-hero", {
  direction: "horizontal",
  loop: true,
  autoplay: {
    delay: 3000,
  },
  mousewheel: true,
  navigation: {
    nextEl: null,
    prevEl: null,
  },
});

const gallerySwiper = new Swiper(".swiper-gallery", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  navigation: {
    nextEl: ".gallery-btn-next",
    prevEl: ".gallery-btn-prev",
  },
  breakpoints: {
    992: {
      slidesPerView: 3,
    },
    769: {
      slidesPerView: 2,
    },
  },
});

const testimonialSwiper = new Swiper(".swiper-testimonials", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 16,
  autoplay: {
    delay: 3000,
  },
  loop: true,
  navigation: {
    nextEl: ".testimonials-btn-next",
    prevEl: ".testimonials-btn-prev",
  },
  breakpoints: {
    769: {
      slidesPerView: 2,
    },
  },
});

const NewsSwiper = new Swiper(".swiper-news", {
  direction: "horizontal",
  slidesPerView: 1,
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
  },
  navigation: {
    nextEl: ".news-next",
    prevEl: ".news-prev",
  },
});

let rotationAngle = 0;
const rotatableImage = document.querySelector(".iamsun");

document.querySelector(".btn-prev-hero").addEventListener("click", () => {
  swiper.slidePrev();
  rotationAngle -= 30;
  rotatableImage.style.transform = `rotate(${rotationAngle}deg)`;
});

document.querySelector(".btn-next-hero").addEventListener("click", () => {
  swiper.slideNext();
  rotationAngle += 30;
  rotatableImage.style.transform = `rotate(${rotationAngle}deg)`;
});
