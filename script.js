// Typing effect
const typedText = document.getElementById("typed");
const phrases = [
  "Full-Stack Developer",
  "Data Enthusiast",
  "Cybersecurity Learner",
  "Creative Technologist",
];
let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;
let typingSpeed = 100;

function type() {
  const currentPhrase = phrases[phraseIndex];
  if (isDeleting) {
    typedText.textContent = currentPhrase.substring(0, charIndex--);
  } else {
    typedText.textContent = currentPhrase.substring(0, charIndex++);
  }

  if (!isDeleting && charIndex === currentPhrase.length) {
    isDeleting = true;
    setTimeout(type, 1200); // Pause at full word
  } else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    phraseIndex = (phraseIndex + 1) % phrases.length;
    setTimeout(type, 300);
  } else {
    setTimeout(type, isDeleting ? 60 : typingSpeed);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  type();
});

// Smooth scroll
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }
  });
});

// Contact form behavior
document.querySelector(".contact-form").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Thanks for reaching out! I'll get back to you soon.");
  this.reset();
});

// Fade-in on scroll
const faders = document.querySelectorAll('section');

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, {
  threshold: 0.1,
});

faders.forEach(section => {
  appearOnScroll.observe(section);
});
