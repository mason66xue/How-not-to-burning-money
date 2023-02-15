const testimonials = document.querySelector('.testimonials');
const testimonialsArray = Array.from(testimonials.children);
const parallax = document.querySelector('.parallax');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');

let currentIndex = 0;

testimonialsArray.forEach((testimonial, index) => {
  if (index !== 0) {
    testimonial.style.display = 'none';
  }
});

testimonialsArray[currentIndex].style.display = 'block';

window.addEventListener('scroll', () => {
  let offset = window.pageYOffset;
  parallax.style.backgroundPositionY = `${offset * 0.7}px`;
});

setInterval(() => {
  testimonialsArray[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % testimonialsArray.length;
  testimonialsArray[currentIndex].style.display = 'block';
}, 10000);

prevButton.addEventListener('click', () => {
  testimonialsArray[currentIndex].style.display = 'none';
  currentIndex = (currentIndex - 1 + testimonialsArray.length) % testimonialsArray.length;
  testimonialsArray[currentIndex].style.display = 'block';
});

nextButton.addEventListener('click', () => {
  testimonialsArray[currentIndex].style.display = 'none';
  currentIndex = (currentIndex + 1) % testimonialsArray.length;
  testimonialsArray[currentIndex].style.display = 'block';
});

const hamburger = document.querySelector('.hamburger');
const nav = document.querySelector('.nav');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  nav.classList.toggle('open');
});

document.addEventListener('click', function(event) {
  // get the dropdown and hamburger elements
  const dropdown = document.querySelector('.nav');
  const hamburger = document.querySelector('.hamburger');

  // if the clicked element is not inside the dropdown or hamburger, close the dropdown
  if (!dropdown.contains(event.target) && event.target !== hamburger) {
    dropdown.classList.remove('open');
    hamburger.classList.remove('open');
  }
});