/* script.js */
document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.querySelector(".menu-toggle");
  const navLinks = document.querySelector(".nav-links");

  menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
  });
});

const slides = document.querySelector('.slides');
    const slideCount = document.querySelectorAll('.slide').length;
    const dotsContainer = document.querySelector('.dots');
    let index = 0;

    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement('span');
      dot.classList.add('dot');
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => showSlide(i));
      dotsContainer.appendChild(dot);
    }

    const dots = document.querySelectorAll('.dot');

    function showSlide(i) {
      index = i;
      slides.style.transform = `translateX(-${i * 100}%)`;
      dots.forEach((dot, idx) => dot.classList.toggle('active', idx === i));
    }

    setInterval(() => {
      index = (index + 1) % slideCount;
      showSlide(index);
    }, 4000);

    let startX = 0;
    const slider = document.getElementById('hero-slider');

    slider.addEventListener('touchstart', e => startX = e.touches[0].clientX);
    slider.addEventListener('touchend', e => {
      let endX = e.changedTouches[0].clientX;
      if (startX - endX > 50) index = (index + 1) % slideCount;
      if (endX - startX > 50) index = (index - 1 + slideCount) % slideCount;
      showSlide(index);
    });

    slider.addEventListener('mousedown', e => startX = e.clientX);
    slider.addEventListener('mouseup', e => {
      let endX = e.clientX;
      if (startX - endX > 50) index = (index + 1) % slideCount;
      if (endX - startX > 50) index = (index - 1 + slideCount) % slideCount;
      showSlide(index);
    });

    
const welcomeSlides = document.querySelector('.welcome-slides');
const welcomeSlideItems = document.querySelectorAll('.welcome-slide');
const welcomePrev = document.querySelector('.welcome-prev');
const welcomeNext = document.querySelector('.welcome-next');

let welcomeIndex = 0;

function showWelcomeSlide(i) {
  welcomeIndex = (i + welcomeSlideItems.length) % welcomeSlideItems.length;
  welcomeSlides.style.transform = `translateX(-${welcomeIndex * 100}%)`;
}

if (welcomePrev && welcomeNext) {
  welcomeNext.addEventListener('click', () => showWelcomeSlide(welcomeIndex + 1));
  welcomePrev.addEventListener('click', () => showWelcomeSlide(welcomeIndex - 1));
  setInterval(() => showWelcomeSlide(welcomeIndex + 1), 4000);
}

const aboutSlides = document.querySelector('.about-slides');
const aboutPrev = document.querySelector('.about-prev');
const aboutNext = document.querySelector('.about-next');
let aboutIndex = 0;

aboutNext.addEventListener('click', () => {
  const totalSlides = aboutSlides.children.length;
  if (aboutIndex < totalSlides - 4) aboutIndex++;
  aboutSlides.style.transform = `translateX(-${aboutIndex * 260}px)`;
});

aboutPrev.addEventListener('click', () => {
  if (aboutIndex > 0) aboutIndex--;
  aboutSlides.style.transform = `translateX(-${aboutIndex * 260}px)`;
});
const yearSelector = document.querySelector(".year-selector");

let isDown = false;
let yearStartX;
let scrollLeft;

yearSelector.addEventListener("mousedown", (e) => {
  isDown = true;
  yearSelector.classList.add("dragging");
  yearStartX = e.pageX - yearSelector.offsetLeft;
  scrollLeft = yearSelector.scrollLeft;
});

const yearButtons = document.querySelectorAll(".year-btn");

yearButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    yearButtons.forEach((b) => b.classList.remove("active"));
    btn.classList.add("active");
   
  });
});


yearSelector.addEventListener("mouseleave", () => {
  isDown = false;
  yearSelector.classList.remove("dragging");
});

yearSelector.addEventListener("mouseup", () => {
  isDown = false;
  yearSelector.classList.remove("dragging");
});

yearSelector.addEventListener("mousemove", (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - yearSelector.offsetLeft;
  const walk = (x - yearStartX) * 2; // Speed factor
  yearSelector.scrollLeft = scrollLeft - walk;
});

const mainImg = document.getElementById("main-project-img");
const galleryImgs = [
  "images/img1.jpg",
  "images/img2.jpg",
  "images/img3.jpg",
  "images/img4.jpg",
  "images/img5.jpg",
  "images/img6.jpg",
  "images/img7.jpg",
  "images/img8.jpg",
  "images/img9.jpg",
  "images/img10.jpg"
];

let currentIndex = 0;

setInterval(() => {
  currentIndex = (currentIndex + 1) % galleryImgs.length;
  mainImg.src = galleryImgs[currentIndex];
}, 3000);


const lightbox = document.getElementById("lightbox");
const closeBtn = lightbox.querySelector(".close");
const fullImg = document.getElementById("full-img");

mainImg.addEventListener("click", () => {
  lightbox.style.display = "flex";
});

closeBtn.addEventListener("click", () => {
  lightbox.style.display = "none";
  fullImg.classList.remove("active");
});

lightbox.addEventListener("click", (e) => {
  if (e.target === lightbox) {
    lightbox.style.display = "none";
    fullImg.classList.remove("active");
  }
});

document.querySelectorAll(".lightbox-gallery img").forEach(img => {
  img.addEventListener("click", () => {
    fullImg.src = img.src;
    fullImg.classList.add("active");
  });
});

const awardsList = document.querySelector(".awards-list");
const awardPrev = document.querySelector(".award-prev");
const awardNext = document.querySelector(".award-next");

let awardIndex = 0;

awardNext.addEventListener("click", () => {
  const totalItems = awardsList.children.length;
  const visibleItems = 4; 
  if (awardIndex < totalItems - visibleItems) {
    awardIndex++;
    awardsList.style.transform = `translateX(-${awardIndex * 120}px)`;
  }
});

awardPrev.addEventListener("click", () => {
  if (awardIndex > 0) {
    awardIndex--;
    awardsList.style.transform = `translateX(-${awardIndex * 120}px)`;
  }
});


const leaveBtn = document.querySelector(".leave-review-btn");
const reviewPopup = document.getElementById("reviewPopup");
const successPopup = document.getElementById("successPopup");
const closePopup = document.querySelector(".close-popup");
const sendReview = document.getElementById("sendReview");
const closeSuccess = document.getElementById("closeSuccess");


leaveBtn.addEventListener("click", () => {
  reviewPopup.style.display = "flex";
});


closePopup.addEventListener("click", () => {
  reviewPopup.style.display = "none";
});


sendReview.addEventListener("click", () => {
  reviewPopup.style.display = "none";
  successPopup.style.display = "flex";
});


closeSuccess.addEventListener("click", () => {
  successPopup.style.display = "none";
});

const openBooking = document.getElementById("openBooking");
const bookingPopup = document.getElementById("bookingPopup");

const submitBooking = document.getElementById("submitBooking");

const closeBooking = bookingPopup.querySelector(".close-popup");


openBooking.addEventListener("click", () => {
  bookingPopup.style.display = "flex";
});


closeBooking.addEventListener("click", () => {
  bookingPopup.style.display = "none";
});


submitBooking.addEventListener("click", () => {
  bookingPopup.style.display = "none";
  successPopup.style.display = "flex";
});


closeSuccess.addEventListener("click", () => {
  successPopup.style.display = "none";
});

const subscribeBtn = document.getElementById("subscribeBtn");
const footerEmail = document.getElementById("footerEmail");
const footerSuccessPopup = document.getElementById("footerSuccessPopup");
const footerClosePopup = document.getElementById("footerClosePopup");

subscribeBtn.addEventListener("click", (e) => {
  e.preventDefault(); 

  const email = footerEmail.value.trim();

  if (email === "") {
    alert("Please enter a valid email");
  } else {
    footerSuccessPopup.style.display = "flex";
  }
});

footerClosePopup.addEventListener("click", () => {
  footerSuccessPopup.style.display = "none";
});

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible"); 
      }
    });
  }, { threshold: 0.3 });

  document.querySelectorAll(".animate-on-scroll").forEach((el) => {
    observer.observe(el);
  });

  const servicesBtn = document.querySelector(".services-btn");
  const dropdown = document.querySelector(".dropdown");

  servicesBtn.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent page jump
    dropdown.classList.toggle("open");
  });

  
  document.addEventListener("click", (e) => {
    if (!dropdown.contains(e.target) && !servicesBtn.contains(e.target)) {
      dropdown.classList.remove("open");
    }
  });
