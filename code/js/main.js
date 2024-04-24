//nav menu
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
//slider 
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
//car mixitup
let mixer = mixitup('.all-car', {
  selectors: {
      target: '.cars'
  },
  animation: {
      duration: 300
  }
});
//active car option
let carLogo = document.querySelectorAll('.car-logo');

function activeLogo() {
  carLogo.forEach(l=> l.classList.remove("active-fc"))
  this.classList.add("active-fc")
}
carLogo.forEach(l => l.addEventListener('click', activeLogo))

// scroll up
function scrollUp() {
	const scrollUp = document.querySelector(".scroll-up");
	if (this.scrollY >= 400) scrollUp.classList.add("show-scroll");
	else scrollUp.classList.remove("show-scroll");
}
window.addEventListener("scroll", scrollUp);