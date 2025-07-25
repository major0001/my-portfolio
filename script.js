// script.js

// Typewriter effect for intro
const typedText = document.getElementById("typed");
const phrases = ["Software Engineer", "Data Enthusiast", "Cybersecurity Learner"];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 100;

function type() {
  const currentPhrase = phrases[phraseIndex];
  const visibleText = currentPhrase.substring(0, charIndex);
  typedText.textContent = visibleText;

  if (!isDeleting) {
    if (charIndex < currentPhrase.length) {
      charIndex++;
      speed = 100;
    } else {
      isDeleting = true;
      speed = 1500;
    }
  } else {
    if (charIndex > 0) {
      charIndex--;
      speed = 50;
    } else {
      isDeleting = false;
      phraseIndex = (phraseIndex + 1) % phrases.length;
      speed = 500;
    }
  }

  setTimeout(type, speed);
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Smooth scroll for nav links
document.querySelectorAll('.nav-links a').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      window.scrollTo({
        top: target.offsetTop - 60,
        behavior: 'smooth'
      });
    }
  });
});

// Form submission handler (frontend only)
document.querySelector('.contact-form').addEventListener('submit', function (e) {
  e.preventDefault();
  alert("Thank you! Your message has been sent.");
  this.reset();
});
