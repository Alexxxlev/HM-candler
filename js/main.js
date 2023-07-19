// mobile menu
const menuBtn = document.querySelector(".menu__btn");
const menuMobile = document.querySelector(".header__menu-list");

menuBtn.addEventListener("click", () => {
  menuMobile.classList.toggle("menu--open");
});

// feedback slider
const swiperFeedback = new Swiper(".feedback__slider", {
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// certificates slider
const swiperCertificates = new Swiper(".certificates__slider", {
  slidesPerView: 3,
  spaceBetween: 20,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
  },
  breakpoints: {
    1000: {
      slidesPerView: 3,
    },
    480: {
      slidesPerView: 2,
    },
    320: {
      slidesPerView: 1,
    },
  },
});

// accordeon
const accordeon = document.querySelector(".accordeon");
const accordeonTitles = accordeon.querySelectorAll(".accordeon__title");

accordeonTitles.forEach.call(accordeonTitles, function (accordeonTitle) {
  accordeonTitle.addEventListener("click", function () {
    const currentText = accordeonTitle.parentElement.querySelector(
      ".accordeon__content"
    );
    accordeonTitle.classList.toggle("accordeon__title--active");
    currentText.classList.toggle("accordeon__content--visible");

    if (currentText.classList.contains("accordeon__content--visible")) {
      currentText.style.maxHeight = currentText.scrollHeight + "px";
    } else {
      currentText.style.maxHeight = null;
    }
  });
});
