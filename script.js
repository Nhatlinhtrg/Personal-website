// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Scroll to Top Button
let mybutton = document.getElementById("scrollToTopBtn");
window.onscroll = function () {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
};
mybutton.onclick = function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Toggle Mobile Navigation Menu
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");
menuToggle.addEventListener('click', function () {
    navMenu.classList.toggle("active");
});

// Form Validation for Contact Form
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();
    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let message = document.getElementById('message').value;
    let errorMessage = document.getElementById('error-message');

    if (name === "" || message === "") {
        errorMessage.textContent = "Vui lòng điền đầy đủ các trường.";
        errorMessage.style.display = "block";
        return;
    }

    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
    if (!email.match(emailPattern)) {
        errorMessage.textContent = "Email không hợp lệ.";
        errorMessage.style.display = "block";
        return;
    }

    errorMessage.style.display = "none";
    alert("Gửi thành công!");
    document.getElementById('contactForm').reset();
});

// Intersection Observer (fade-in)
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.fade-in').forEach(element => {
    observer.observe(element);
});