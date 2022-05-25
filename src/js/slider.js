new Swiper(".swiper", {
  slidesPerView: 1.3,
  spaceBetween: 20,
  width: 180,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

new Swiper('.prices__swiper', {
  slidesPerView: 1.2,
  width: 300,
  height: 260,
  spaceBetween: 18,
  keyboard: {
    enabled: true,
  },
  pagination: {
    el: '.swiper-pagination',
    clickable: true}


})
