// ===== NAVBAR SCROLL EFFECT =====
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
        navbar.classList.add("scrolled");
    } else {
        navbar.classList.remove("scrolled");
    }
});

// ===== BUTTON SCROLL =====
function scrollToSection() {
    document.getElementById("about").scrollIntoView();
}

// ===== FADE-IN ON SCROLL =====
const fadeElements = document.querySelectorAll(".fade-in");

window.addEventListener("scroll", function() {
    fadeElements.forEach(element => {
        const position = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (position < windowHeight - 100) {
            element.classList.add("active");
        }
    });
});
