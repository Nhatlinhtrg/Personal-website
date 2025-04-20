// Toggle menu khi ở chế độ mobile
const menuToggle = document.getElementById("hamburger-icon");  // Đảm bảo ID đúng với HTML
const navMenu = document.getElementById("nav-menu");  // Đảm bảo ID đúng với HTML

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', function () {
        navMenu.classList.toggle("active");  // Thêm/loại bỏ class "active" để hiển thị menu
    });
}

// Scroll to Top Button (nếu có nút)
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
        if (window.scrollY > 20) {
            scrollToTopBtn.style.display = "block";  // Hiển thị nút khi người dùng cuộn xuống
        } else {
            scrollToTopBtn.style.display = "none";  // Ẩn nút khi người dùng cuộn lên trên
        }
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });  // Cuộn mượt mà về đầu trang
    });
}

// Hiệu ứng fade-in khi cuộn
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');  // Thêm class 'visible' khi phần tử vào trong viewport
            observer.unobserve(entry.target);  // Dừng quan sát phần tử khi đã hiển thị
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll('.fade-in').forEach(el => observer.observe(el));  // Quan sát các phần tử có class 'fade-in'

// JavaScript để kích hoạt trang kéo khi nhấn vào kính lúp
document.getElementById('hamburger-icon').addEventListener('click', function () {
    document.getElementById('side-panel').classList.toggle('open');  // Mở hoặc đóng trang kéo (side panel)
});

// Lấy tất cả các nút mũi tên để điều khiển thư mục con
const toggleBtns = document.querySelectorAll('.toggle-btn');  // Các nút mũi tên

// Lặp qua các nút mũi tên và thêm sự kiện click
toggleBtns.forEach(button => {
    button.addEventListener('click', function () {
        // Lấy thư mục con tương ứng với nút mũi tên
        const subfolders = this.nextElementSibling;  // Thư mục con nằm ngay sau nút mũi tên

        // Toggle hiển thị thư mục con
        subfolders.style.display = (subfolders.style.display === 'block') ? 'none' : 'block';

        // Thêm/loại bỏ lớp active trên nút mũi tên
        this.classList.toggle('active');
    });
});

let currentIndex = 6;  // Hiển thị ban đầu 6 mục khóa học

// Hàm loadMore để hiển thị thêm các mục khóa học
function loadMore() {
    const hiddenCourses = document.querySelectorAll('.course-item.hidden');
    
    // Chỉ hiển thị 3 mục tiếp theo mỗi lần nhấn "Load More"
    for (let i = 0; i < 3 && i < hiddenCourses.length; i++) {
        hiddenCourses[i].classList.remove('hidden');
        hiddenCourses[i].classList.add('visible');
    }
    currentIndex += 3;

    // Ẩn nút "Load More" nếu đã hiển thị tất cả khóa học
    if (currentIndex >= hiddenCourses.length + 6) {
        document.querySelector('.load-more-btn').style.display = 'none';
    }

    // Hiển thị nút "Show Less"
    document.querySelector('.show-less-btn').style.display = 'block';
}

// Khi trang tải, chỉ hiển thị 6 mục đầu tiên và ẩn phần còn lại
document.addEventListener("DOMContentLoaded", function() {
    const allItems = document.querySelectorAll('.course-item');
    
    // Ẩn các mục sau mục thứ 6
    for (let i = 6; i < allItems.length; i++) {
        allItems[i].classList.remove('visible');
        allItems[i].classList.add('hidden');
    }
});

// Hàm Load More: Hiển thị thêm 6 mục
function loadMore() {
    const hiddenItems = document.querySelectorAll('.course-item.hidden');
    
    // Hiển thị 6 mục ẩn tiếp theo
    for (let i = 0; i < 6 && i < hiddenItems.length; i++) {
        hiddenItems[i].classList.remove('hidden');
        hiddenItems[i].classList.add('visible');
    }

    // Nếu không còn mục nào để hiển thị, ẩn nút Load More
    if (document.querySelectorAll('.course-item.hidden').length === 0) {
        document.querySelector('.load-more-btn').style.display = 'none';
        document.querySelector('.show-less-btn').style.display = 'block';  // Hiển thị nút Show Less
    }
}

// Hàm Show Less: Ẩn các mục đã hiển thị thêm
function showLess() {
    const allItems = document.querySelectorAll('.course-item');

    // Ẩn tất cả các mục sau mục thứ 6
    for (let i = 6; i < allItems.length; i++) {
        allItems[i].classList.remove('visible');
        allItems[i].classList.add('hidden');
    }

    // Hiển thị lại nút Load More và ẩn nút Show Less
    document.querySelector('.load-more-btn').style.display = 'block';
    document.querySelector('.show-less-btn').style.display = 'none';
}
document.getElementById('en-btn').addEventListener('click', function() {
    changeLanguage('en');
});

document.getElementById('ru-btn').addEventListener('click', function() {
    changeLanguage('ru');
});

function changeLanguage(language) {
    if (language === 'en') {
        document.documentElement.lang = 'en';
        // Change text content for English
        document.querySelector('h1').textContent = "Education, devoid of ideology.";
        document.querySelector('p').textContent = "Affordable to all, taught by the best.";
        // You can add more text content changes here
    } else if (language === 'ru') {
        document.documentElement.lang = 'ru';
        // Change text content for Russian
        document.querySelector('h1').textContent = "Образование, лишенное идеологии.";
        document.querySelector('p').textContent = "Доступно для всех, преподаваемое лучшими.";
        // Add more translations here
    }
}

