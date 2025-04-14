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

// JavaScript để kích hoạt trang kéo khi nhấn vào kính lúp
document.getElementById('hamburger-icon').addEventListener('click', function() {
    document.getElementById('side-panel').classList.toggle('open');
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
// Slider: Thêm nút chuyển tiếp (trái và phải)
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
const eventsContainer = document.querySelector('.events-container');
let currentIndex = 0;

function moveSlider(direction) {
    const eventItems = document.querySelectorAll('.event-item');
    const totalItems = eventItems.length;

    if (direction === 'prev') {
        currentIndex = (currentIndex === 0) ? totalItems - 1 : currentIndex - 1;
    } else {
        currentIndex = (currentIndex === totalItems - 1) ? 0 : currentIndex + 1;
    }

    eventsContainer.style.transform = `translateX(-${currentIndex * 25}%)`;
}

// Tạo slider cho phần Explore Courses
const explorePrevButton = document.querySelector('.explore-prev');
const exploreNextButton = document.querySelector('.explore-next');
const exploreCoursesContainer = document.querySelector('.explore-courses .courses-container');
let exploreIndex = 0;

function moveExploreSlider(direction) {
    const courseItems = document.querySelectorAll('.course-item');
    const totalCourseItems = courseItems.length;

    if (direction === 'prev') {
        exploreIndex = (exploreIndex === 0) ? totalCourseItems - 4 : exploreIndex - 1;
    } else {
        exploreIndex = (exploreIndex === totalCourseItems - 4) ? 0 : exploreIndex + 1;
    }

    exploreCoursesContainer.style.transform = `translateX(-${exploreIndex * 25}%)`;
}

if (prevButton && nextButton) {
    prevButton.addEventListener('click', () => moveSlider('prev'));
    nextButton.addEventListener('click', () => moveSlider('next'));
}

if (explorePrevButton && exploreNextButton) {
    explorePrevButton.addEventListener('click', () => moveExploreSlider('prev'));
    exploreNextButton.addEventListener('click', () => moveExploreSlider('next'));
}



