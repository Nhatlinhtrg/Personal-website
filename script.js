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

let currentIndex = 8;  // Hiển thị ban đầu 6 mục khóa học

// Hàm Load More - Hiển thị các mục khóa học bị ẩn
function loadMore() {
    var hiddenItems = document.querySelectorAll('.course-item.hidden');
    for (var i = 0; i < hiddenItems.length; i++) {
        hiddenItems[i].classList.add('visible');
        hiddenItems[i].classList.remove('hidden');
    }

    // Ẩn nút "Load More" khi không còn mục ẩn
    var hiddenItemsAfterLoad = document.querySelectorAll('.course-item.hidden');
    if (hiddenItemsAfterLoad.length === 0) {
        document.querySelector('.load-more-btn').style.display = 'none';
    }

    // Hiển thị nút "Show Less"
    document.querySelector('.show-less-btn').style.display = 'block';
}

// Hàm Show Less - Ẩn bớt các mục khóa học
function showLess() {
    var visibleItems = document.querySelectorAll('.course-item.visible');
    var itemsToHide = Array.from(visibleItems).slice(8); // Giữ lại 8 mục đầu

    for (var i = 0; i < itemsToHide.length; i++) {
        itemsToHide[i].classList.add('hidden');
        itemsToHide[i].classList.remove('visible');
    }

    // Hiển thị lại nút "Load More"
    document.querySelector('.load-more-btn').style.display = 'block';

    // Ẩn nút "Show Less" khi đã ẩn bớt
    document.querySelector('.show-less-btn').style.display = 'none';
}
