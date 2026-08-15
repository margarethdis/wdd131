// Handles Navigation Toggle, Footer Year, and Form LocalStorage
document.addEventListener("DOMContentLoaded", () => {
  // 1. Mobile Menu Toggle
  const menuBtn = document.querySelector("#menu-btn");
  const navMenu = document.querySelector("#nav-menu");

  if (menuBtn && navMenu) {
    menuBtn.addEventListener("click", () => {
      navMenu.classList.toggle("show");
    });
  }

  // 2. Dynamic Footer Year
  const yearSpan = document.querySelector("#year");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  // 3. LocalStorage Visitor Counter
  let visitCount = Number(localStorage.getItem("visitCount")) || 0;
  visitCount++;
  localStorage.setItem("visitCount", visitCount);

  // 4. Form Handling with LocalStorage & Template Literals
  const contactForm = document.querySelector("#contact-form");
  const feedbackMsg = document.querySelector("#form-feedback");

  if (contactForm) {
    contactForm.addEventListener("submit", (e) => {
      e.preventDefault();

      const name = document.querySelector("#fullname").value;
      const email = document.querySelector("#email").value;
      const targetLang = document.querySelector("#target-lang").value;

      // Save user submission preferences
      const submission = { name, email, targetLang, date: new Date().toLocaleDateString() };
      localStorage.setItem("lastSubmission", JSON.stringify(submission));

      // Display feedback message using template literals
      feedbackMsg.style.display = "block";
      feedbackMsg.innerHTML = `<p>Thank you, <strong>${name}</strong>! Your message regarding <strong>${targetLang}</strong> has been received.</p>`;

      contactForm.reset();
    });
  }
});