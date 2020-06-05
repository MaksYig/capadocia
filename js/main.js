$(function () {
  $(".fairy__tail-slider,.our-trip-slider").slick({
    prevArrow:
      '<button type="button" class="slick-btn slick-prev"><img src="img/arrow-left.svg" alt=""></button>',
    nextArrow:
      '<button type="button" class="slick-btn slick-next"><img src="img/arrow-right.svg" alt=""></button>',
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
    responsive: [
      {
        breakpoint: 601,
        settings: {
          arrows: false,
        },
      },
    ],
  });
});
