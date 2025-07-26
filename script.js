// Dark Mode Toggle
document.addEventListener("DOMContentLoaded", () => {
  const toggleButton = document.getElementById("darkToggle");

  toggleButton.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    toggleButton.textContent = document.body.classList.contains("dark-mode") ? "☀️" : "🌓";
  });

  // Typing Animation
  const typed = document.getElementById("typed");
  const text = "Software Engineer | Data Enthusiast | Cybersecurity Learner";
  let index = 0;

  function type() {
    if (index < text.length) {
      typed.textContent += text.charAt(index);
      index++;
      setTimeout(type, 50);
    }
  }
  type();

  // Contact Form Submission (mock behavior)
  const form = document.querySelector(".contact-form");
  form.addEventListener("submit", function (e) {
    e.preventDefault();

    const name = form.elements["name"].value;
    const email = form.elements["email"].value;
    const message = form.elements["message"].value;

    if (name && email && message) {
      alert("Thank you for your message, " + name + "! I'll get back to you shortly.");
      form.reset();
    } else {
      alert("Please fill in all fields.");
    }
  });
});
