var swiper = new Swiper(".banner-home", {
  effect: "slide",  
  preloadImages: false,
  lazy: {
    loadPrevNext: true
  },
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  keyboard: true,
});

var swiper = new Swiper(".categories-bar", {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 3,
  loop: true,
  loopFillGroupWithBlank: true,
  breakpoints: {
    250: {
      slidesPerView: 3.5,
    },
    640: {
      slidesPerView: 5,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 6,
      spaceBetween: 40,
    },
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

// Slider da página product

var swiper = new Swiper(".thumbsSlider", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper2 = new Swiper(".productSlider", {
  preloadImages: false,
  lazy: {
    loadPrevNext: true
  },
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper,
  },
});

// Slider Showroom

var swiper2 = new Swiper(".showroomSlider", {
  preloadImages: false,
  lazy: {
    loadPrevNext: true
  },
   
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  // mousewheel: true,
  keyboard: true,
});
