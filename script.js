// Toggle menu khi ở chế độ mobile
const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle("active");
    });
}

// Scroll to Top Button (nếu có nút)
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Hiệu ứng fade-in khi cuộn
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));

// Lấy phần tử của hamburger menu và trang kéo
const hamburgerMenu = document.getElementById('hamburger-icon');
const sidePanel = document.getElementById('sidePanel');

// Khi nhấn vào hamburger menu, mở trang kéo
hamburgerMenu.addEventListener('click', function() {
    sidePanel.classList.toggle('open');  // Mở/đóng trang kéo khi nhấn vào nút
});
// Lấy tất cả các nút mũi tên
const toggleBtns = document.querySelectorAll('.toggle-btn');

// Lặp qua các nút mũi tên và thêm sự kiện click
toggleBtns.forEach(button => {
    button.addEventListener('click', function() {
        // Lấy thư mục con tương ứng với nút mũi tên
        const subfolders = this.nextElementSibling; // Thư mục con nằm ngay sau nút mũi tên

        // Toggle hiển thị thư mục con
        subfolders.style.display = (subfolders.style.display === 'block') ? 'none' : 'block';

        // Thêm/loại bỏ lớp active trên nút mũi tên
        this.classList.toggle('active');
    });
});
// Định nghĩa nút điều hướng
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const container = document.querySelector('.events-container');

// Sự kiện khi nhấn nút "next"
nextButton.addEventListener('click', () => {
    container.scrollBy({
        left: 300,  // Kéo 300px sang bên phải
        behavior: 'smooth'
    });
});

// Sự kiện khi nhấn nút "prev"
prevButton.addEventListener('click', () => {
    container.scrollBy({
        left: -300,  // Kéo 300px sang bên trái
        behavior: 'smooth'
    });
});

