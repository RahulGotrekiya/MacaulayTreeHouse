const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  mousewheel: true,
  navigation: {
    nextEl: null,
    prevEl: null,
  },
});

let rotationAngle = 0;
const rotatableImage = document.querySelector('.iamsun');

document.querySelector('.btn-prev').addEventListener('click', () => {
  swiper.slidePrev();
  rotationAngle -= 30;
  rotatableImage.style.transform = `rotate(${rotationAngle}deg)`;
});

document.querySelector('.btn-next').addEventListener('click', () => {
  swiper.slideNext();
  rotationAngle += 30;
  rotatableImage.style.transform = `rotate(${rotationAngle}deg)`;
});
