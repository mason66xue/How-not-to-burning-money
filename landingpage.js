const testimonials = document.querySelector('.testimonials');
const testimonialsArray = Array.from(testimonials.children);
const parallax = document.querySelector('.parallax');

let currentIndex = 0;

testimonialsArray[currentIndex].style.display = 'block';

window.addEventListener('scroll', () => {
  const offset = window.pageYOffset;
  parallax.style.backgroundPositionY = `${offset * 0.7}px`;
});

setInterval(() => {
  testimonialsArray[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % testimonialsArray.length;
  testimonialsArray[currentIndex].style.display = 'block';
}, 3000);

