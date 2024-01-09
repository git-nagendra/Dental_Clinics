window.onscroll = function () {
  myFunction();
};

var navbar = document.querySelector(".header_2");

function myFunction() {
  if (window.pageYOffset>= 100) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }

//got to top

  let scrollProgress = document.getElementById("progress");
    let scrollP = document.getElementById('progress-value');
    
    let pos = document.documentElement.scrollTop || document.body.scrollTop;
    let calcHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    let scrollValue = Math.round(pos * 100 / calcHeight);
    console.log(scrollValue);
    scrollProgress.style.background = `conic-gradient(#008fff ${scrollValue}%, #f2c302 ${scrollValue}%, #c0c0ff ${scrollValue}%)`;
    scrollProgress.addEventListener('click', () => {
      window.scrollTo(0, 0);
    });
    // scrollP.textContent = `${scrollValue}`;
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


// let scrollper = () => {
//  
// }

// window.onscroll = scrollper;
