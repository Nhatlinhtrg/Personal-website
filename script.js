// Toggle menu + side panel khi ở mobile
const menuToggle = document.getElementById("hamburger-icon");
const navMenu = document.getElementById("nav-menu");
const sidePanel = document.getElementById("side-panel");

if (menuToggle) {
    menuToggle.addEventListener("click", function () {
        if (navMenu) navMenu.classList.toggle("active");
        if (sidePanel) sidePanel.classList.toggle("open");
    });
}

document.getElementById('hamburger-icon').addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector('.nav-menu').classList.toggle('active');
});



// Scroll to Top Button
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

if (scrollToTopBtn) {
    window.addEventListener("scroll", () => {
        scrollToTopBtn.style.display = window.scrollY > 20 ? "block" : "none";
    });

    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Hiệu ứng fade-in khi cuộn
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Toggle thư mục con (subfolder)
const toggleBtns = document.querySelectorAll(".toggle-btn");

toggleBtns.forEach(button => {
    button.addEventListener("click", function () {
        const subfolders = this.nextElementSibling;
        if (subfolders) {
            const isShown = subfolders.style.display === "block";
            subfolders.style.display = isShown ? "none" : "block";
            this.classList.toggle("active", !isShown);
        }
    });
});


// Load More / Show Less khóa học
let courseIndex = 8;

function loadMore() {
    const hiddenItems = document.querySelectorAll(".course-item.hidden");
    hiddenItems.forEach(item => {
        item.classList.remove("hidden");
        item.classList.add("visible");
    });

    const loadMoreBtn = document.querySelector(".load-more-btn");
    const showLessBtn = document.querySelector(".show-less-btn");

    if (hiddenItems.length === 0 && loadMoreBtn) {
        loadMoreBtn.style.display = "none";
    }

    if (showLessBtn) {
        showLessBtn.style.display = "block";
    }
}

function showLess() {
    const visibleItems = document.querySelectorAll(".course-item.visible");
    const itemsToHide = Array.from(visibleItems).slice(8);

    itemsToHide.forEach(item => {
        item.classList.add("hidden");
        item.classList.remove("visible");
    });

    const loadMoreBtn = document.querySelector(".load-more-btn");
    const showLessBtn = document.querySelector(".show-less-btn");

    if (loadMoreBtn) loadMoreBtn.style.display = "block";
    if (showLessBtn) showLessBtn.style.display = "none";
}

// Lấy tất cả các nút toggle
const dropdownBtns = document.querySelectorAll('.dropdown-btn');

// Lắng nghe sự kiện nhấp vào mỗi nút
dropdownBtns.forEach(btn => {
    btn.addEventListener('click', function() {
        this.classList.toggle('active');
        const dropdownList = this.nextElementSibling;
        if (dropdownList.style.display === "block") {
            dropdownList.style.display = "none";
        } else {
            dropdownList.style.display = "block";
        }
    });
});