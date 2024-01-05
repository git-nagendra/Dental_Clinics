window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector(".header_2");

function myFunction() {
  if (window.pageYOffset >= 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
}

// ---main slider---
var swiper = new Swiper(".bannerSwiper", {
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
});

var swiper = new Swiper(".Swiper2", {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 4,
  spaceBetween: 30,
  freeMode: true,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 40,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 50,
    },
  },
});
var swiper = new Swiper(".mySwiper3", {
  rewind: true,
  autoplay: {
    delay: 6000,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

const ham = document.querySelector(".ham");
const navlink = document.querySelector(".nav_link");
ham.addEventListener("click", () => {
  ham.classList.toggle("transform");
  navlink.classList.toggle("mobile");
});

const sub =document.querySelectorAll('.sub_menu');
console.log(sub);
const link =document.querySelectorAll('.sub_menu_div')


sub.forEach((element, index) => {
  element.addEventListener('click', () => {
    link[index].classList.toggle('flex');
  });
});