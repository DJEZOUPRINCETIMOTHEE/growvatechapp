/*===========================
  custom swiper js start
=============================*/
var swiperOne = new Swiper(".packages", {
  slidesPerView: 2.5,
  spaceBetween: 15,
  breakpoints: {
    0: {
      slidesPerView: 2,
    },
    375: {
      slidesPerView: 2.5,
    },
  },
});

var swiperTwo = new Swiper(".blog-slider", {
  slidesPerView: 2.5,
  spaceBetween: 15,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    375: {
      slidesPerView: 1.5,
    },
    425: {
      slidesPerView: 1.8,
    },
    500: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2.3,
    },
  },
});

var sliderThree = new Swiper(".coupon", {
  slidesPerView: 1.5,
  spaceBetween: 15,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1.3,
    },
    375: {
      slidesPerView: 1.5,
    },
    767: {
      slidesPerView: 2,
    },
  },
});

var swiperFour = new Swiper(".header-panel-lg", {
  loop: true,
  centeredSlides: true,
  effect: "fade",
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
});
var swiperFive = new Swiper(".service-slider", {
  slidesPerView: 2.5,
  spaceBetween: 15,
  breakpoints: {
    0: {
      slidesPerView: 1.2,
    },
    375: {
      slidesPerView: 1.5,
    },
    425: {
      slidesPerView: 1.8,
    },
    500: {
      slidesPerView: 2,
    },
    600: {
      slidesPerView: 2.3,
    },
  },
});

var thumbnailslider2 = new Swiper(".thumbnail-slider2", {
  spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
});
var mainslider = new Swiper(".main-slider", {
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: thumbnailslider2,
  },
});

// Function to handle redirection on the last slide
mainslider.on("slideChange", function () {
  const totalSlides = mainslider.slides.length - 1; // Get total number of slides (0-indexed)

  // Check if user is on the last slide
  if (mainslider.activeIndex === totalSlides) {
    document
      .querySelector(".swiper-button-next")
      .addEventListener("click", function () {
        // Redirect to another page on the last slide's next button click
        window.location.href = "login.html"; // Replace 'nextPage.html' with your target page
      });
  }
});

var sliderSeven = new Swiper(".plan-slider", {
  slidesPerView: 1.5,
  spaceBetween: 15,
  centeredSlides: true,
  freeMode: false,
  loop: true,
  breakpoints: {
    0: {
      slidesPerView: 1.3,
      spaceBetween: -6,
    },
    375: {
      spaceBetween: 2,
      slidesPerView: 1.5,
    },
    767: {
      slidesPerView: 1.5,
    },
  },
});
