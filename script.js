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

let currentIndex = 3;  // Hiển thị ban đầu 2 mục khóa học

const courses = [
    {title: 'Life Management', description:'Master your personal growth' },
    {title: 'Personality and Its Transformation', description: 'Discover your true potential' },
    {title: 'Business Model', description: 'Understand the structure of a successful business' },
    {title: 'Train the Trainers', description: 'Become an effective educator and trainer' },
    {title: 'Introduction to Vietnamese Culture', description: 'Learn about the history and culture of Vietnam' },
    {title: 'The Study of Greatest Minds', description: 'Study the thoughts and works of historys greatest thinkers' },
    {title: 'Finance', description: 'Manage your financial future' },
    {title: 'Psychology', description: 'Understand the human mind' },
    {title: 'Foreign Language Acquisitions', description: 'Learn new languages easily' },
    {title: 'Corporate Management', description: 'Manage businesses effectively' },
    {title: 'Fundamentals of Neuroscience', description: 'Explore the brain and its functions' },
    {title: 'Talent Management', description: 'Develop and retain talent' },
    // Bạn có thể thêm nhiều khóa học khác vào đây
];

function loadMore() {
    const container = document.querySelector('.courses-container');
    const maxIndex = courses.length;

    // Tải thêm 3 mục khóa học mỗi lần
    for (let i = currentIndex; i < currentIndex + 3 && i < maxIndex; i++) {
        const course = courses[i];
        const courseItem = document.createElement('div');
        courseItem.classList.add('course-item');
        courseItem.innerHTML = `
            <img src="${course.img}" alt="${course.title}">
            <div class="text-overlay">
                <h3>${course.title}</h3>
                <p>${course.description}</p>
            </div>
        `;
        container.appendChild(courseItem);
    }

    // Cập nhật chỉ mục của mục khóa học hiện tại
    currentIndex += 3;

    // Nếu đã tải hết các khóa học, ẩn nút Load More
    if (currentIndex >= maxIndex) {
        document.querySelector('.load-more-btn').style.display = 'none';
    }
}

