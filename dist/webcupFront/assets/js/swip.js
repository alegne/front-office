function go() {
  alert("go");
  var swiper = new Swiper('.swiper-container', {
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 60, //rotate:50
      stretch: -200,
      depth: 100,
      modifier: 1,
      slideShadows : true,
    },
    pagination: {
      el: '.swiper-pagination',
    },
  });
}
