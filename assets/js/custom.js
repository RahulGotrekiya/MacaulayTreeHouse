// Slider 
$(document).ready(function() {
  $(".heading-slider").slick({
    infinite: true,
    prevArrow: $(".btn-prev"),
    nextArrow: $(".btn-next"),
  });
});

// Function to rotate the image
function rotateImage(degree) {
  currentAngle += degree;
  const image = $('.iamsun');
  image.css('transform', `rotate(${currentAngle}deg)`);
}

let currentAngle = 0;
$('.btn-prev').click(function() {
  rotateImage(-30);
});

$('.btn-next').click(function() {
  rotateImage(30);
});
