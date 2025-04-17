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

// Carousel (Prev & Next Button)
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');
const coursesContainer = document.querySelector('.courses-container');

// Đếm số lượng các phần tử khóa học
const courseItems = document.querySelectorAll('.course-item');
let currentIndex = 0;

// Hàm di chuyển carousel sang trái
function slideToPrev() {
    if (currentIndex > 0) {
        currentIndex--;  // Giảm chỉ số index nếu không phải phần tử đầu tiên
    } else {
        currentIndex = courseItems.length - 1;  // Nếu ở đầu, quay về phần tử cuối cùng
    }
    updateSlidePosition();
}

// Hàm di chuyển carousel sang phải
function slideToNext() {
    if (currentIndex < courseItems.length - 1) {
        currentIndex++;  // Tăng chỉ số index nếu không phải phần tử cuối cùng
    } else {
        currentIndex = 0;  // Nếu ở cuối, quay về phần tử đầu tiên
    }
    updateSlidePosition();
}

// Cập nhật vị trí hiển thị của carousel
function updateSlidePosition() {
    const offset = -currentIndex * 280;  // Điều chỉnh theo kích thước của mỗi phần tử (280px)
    coursesContainer.style.transform = `translateX(${offset}px)`;  // Dịch chuyển các phần tử carousel theo trục X
}

// Thêm sự kiện cho các nút điều hướng
prevBtn.addEventListener('click', slideToPrev);  // Khi nhấn nút Prev, di chuyển carousel sang trái
nextBtn.addEventListener('click', slideToNext);  // Khi nhấn nút Next, di chuyển carousel sang phải

