let navIcon = document.querySelector("#nav-icon");
let navUl = document.querySelector("#navUl");

function nav() {
  if (navIcon.className == "ri-menu-line" || navUl.style.left == "-100%") {
    navIcon.className = "ri-close-line";
    navUl.style.left = "0%";
  } else {
    navIcon.className = "ri-menu-line";
    navUl.style.left = "-100%";
  }
}
//
let swiper = new Swiper(".popular-section", {
  loop: true,
  spaceBetween: 24,
  slidesPerView: "auto", 
  grabCursor: true,
  pagination: {
    el: ".swiper-pagination",
    dynamicBullets: true,
    clickable: true,
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 16, 
    },
    768: {
      slidesPerView: 3,
    },
    900: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

