// Sliders

var swiper1 = new Swiper(".banner-home", {
  effect: "slide",
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
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

var swiper2 = new Swiper(".categories-bar", {
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

var swiper3 = new Swiper(".thumbsSlider", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesProgress: true,
});

var swiper4 = new Swiper(".productSlider", {
  preloadImages: false,
  initialSlide: 1,
  lazy: {
    loadPrevNext: true,
  },
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper3,
  },
});

// Slider Showroom

var swiper5 = new Swiper(".showroomSlider", {
  preloadImages: false,
  lazy: {
    loadPrevNext: true,
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


// Aviso Cookies

const cookie = get_cookie("banner_aviso_cookies");
const banner = document.getElementById("banner_cookies");

function cria_cookie(nome, valor) {
  document.cookie = nome + "=" + valor + "; path=/";
  // oculta o banner depois de aceitar os cookies
  banner.style.display = "none";
}

function get_cookie(nome_cookie) {
  // Adiciona o sinal de = na frente do nome do cookie
  let cname = " " + nome_cookie + "=";
  // Obtém todos os cookies do documento
  let cookies = document.cookie;
  // Verifica se seu cookie existe
  if (cookies.indexOf(cname) == -1) {
    return false;
  }
  // Remove a parte que não interessa dos cookies
  cookies = cookies.substring(cookies.indexOf(cname), cookies.length);
  // Obtém o valor do cookie até o ;
  if (cookies.indexOf(";") != -1) {
    cookies = cookies.substring(0, cookies.indexOf(";"));
  }
  // Remove o nome do cookie e o sinal de =
  cookies = cookies.split("=")[1];
  // Retorna apenas o valor do cookie
  return decodeURI(cookies);
}

function exibirBannerCookie() {
  if (cookie == "true") {
    banner.style.display = "none";
  } else {
    banner.style.display = "block";
    banner.style.position = "fixed";
    banner.style.bottom = "10px";
    banner.style.left = "10px";
    banner.style.right = "10px";
  }
}
exibirBannerCookie();

// Modal de categorias

function modalOverlay() {
  const modal = document.querySelector(".open_menu_categories");
  modal.classList.add("modal-overlay");
}

function exitModalOverlay() {
  const modal = document.querySelector(".open_menu_categories");
  modal.classList.remove("modal-overlay");
}