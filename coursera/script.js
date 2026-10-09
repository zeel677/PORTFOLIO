
/* Mobile navigation */
const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

menuToggle.addEventListener("click", function () {
    const isOpen = navLinks.classList.toggle("open");

    menuToggle.setAttribute("aria-expanded", isOpen);
    menuToggle.textContent = isOpen ? "✕" : "☰";
});

/* Close mobile menu after selecting a link */
navLinks.querySelectorAll("a").forEach(function (link) {
    link.addEventListener("click", function () {
        navLinks.classList.remove("open");
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.textContent = "☰";
    });
});

/* Dark mode toggle */
const themeToggle = document.getElementById("theme-toggle");

themeToggle.addEventListener("click", function () {
    const isDark = document.body.classList.toggle("dark-mode");

    themeToggle.textContent = isDark
        ? "Switch to Light Mode"
        : "Toggle Dark Mode";
});

/* Automatically display the current year */
document.getElementById("year").textContent =
    new Date().getFullYear();

/* Contact form interaction */
const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value.trim();

    formStatus.textContent =
        "Thank you, " + name +
        "! Your form was validated successfully.";

    contactForm.reset();
});