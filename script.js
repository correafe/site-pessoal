var swiper = new Swiper(".mySwiper", {
  cssMode: true,
  loop: true,
  slidesPerView: 3,  // Exibe 3 imagens ao mesmo tempo
  spaceBetween: 20,  // Espaço entre os slides
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  mousewheel: true,
  keyboard: true,
});
