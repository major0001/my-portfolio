// Dark Mode Toggle
const toggleButton = document.createElement('button');
toggleButton.textContent = "🌙";
toggleButton.classList.add('dark-toggle');
document.body.appendChild(toggleButton);

toggleButton.addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
  toggleButton.textContent = document.body.classList.contains('dark-mode') ? "☀️" : "🌙";
});

// Typing Animation
const typedText = "Software Engineer | Data Enthusiast | Cybersecurity Learner";
let index = 0;
const typedDiv = document.getElementById("typed");

function typeEffect() {
  if (index < typedText.length) {
    typedDiv.textContent += typedText.charAt(index);
    index++;
    setTimeout(typeEffect, 60);
  }
}

document.addEventListener("DOMContentLoaded", typeEffect);

// Contact Form Submission (mock)
const form = document.querySelector(".contact-form");
form.addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Message sent successfully! Thank you.");
  form.reset();
});
