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

const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const coursesContainer = document.querySelector('.courses-container');
const courseItems = document.querySelectorAll('.course-item');
let currentIndex = 0;
const itemsToShow = 5;  // Hiển thị 5 mục

// Hàm di chuyển carousel sang trái
function slideToPrev() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = courseItems.length - itemsToShow;  // Quay về phần tử cuối cùng nếu ở đầu
    }
    updateSlidePosition();
}

// Hàm di chuyển carousel sang phải
function slideToNext() {
    if (currentIndex < courseItems.length - itemsToShow) {
        currentIndex++;
    } else {
        currentIndex = 0;  // Quay về phần tử đầu tiên nếu ở cuối
    }
    updateSlidePosition();
}

// Cập nhật vị trí hiển thị của carousel
function updateSlidePosition() {
    courseItems.forEach((item, index) => {
        if (index >= currentIndex && index < currentIndex + itemsToShow) {
            item.classList.add('visible');
        } else {
            item.classList.remove('visible');
        }
    });

    const offset = -currentIndex * (courseItems[0].offsetWidth + 20);  // Điều chỉnh theo kích thước của mỗi phần tử
    coursesContainer.style.transform = `translateX(${offset}px)`;  // Dịch chuyển các phần tử carousel theo trục X
}

// Thêm sự kiện cho các nút điều hướng
prevBtn.addEventListener('click', slideToPrev);
nextBtn.addEventListener('click', slideToNext);

// Khởi tạo lần đầu tiên
updateSlidePosition();
