// main script
(function () {
  "use strict";

  new Swiper(".tech-slider", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    },

    breakpoints: {
      "@0.00": {
        slidesPerView: 4,
      },
      "@0.75": {
        slidesPerView: 6,
      },
      "@1.00": {
        slidesPerView: 10,
      },
      "@1.50": {
        slidesPerView: 14,
      },
    },
  });

  var form = document.getElementById("cla-form");
  var honeypot = document.getElementById("honeypot");
  form.addEventListener("submit", function (event) {
    if (honeypot.value !== "") {
      event.preventDefault();
    }
  });
})();
