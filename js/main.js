$(document).ready(function () {
  $(".sliders").slick({
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev_one btn btn-slider' data-aos='flip-left'><img src='image/section_photo2-previous.jpg' alt='previous'></button>",
    nextArrow:
      "<button type='button' class='slick-next_one btn btn-slider' data-aos='flip-right'><img src='image/section_photo2-next.jpg' alt='next'></button>",
    responsive: [
      {
        breakpoint: 1301,
        settings: {
          nfinite: true,
          slidesToShow: 5,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1151,
        settings: {
          nfinite: true,
          slidesToShow: 4,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 781,
        settings: {
          nfinite: true,
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 651,
        settings: {
          nfinite: true,
          slidesToShow: 2,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
      {
        breakpoint: 451,
        settings: {
          nfinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".sliders-services_wrapper-block").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev btn btn-slider' data-aos='flip-left'><img src='image/section_photo2-previous.jpg' alt='previous'></button>",
    nextArrow:
      "<button type='button' class='slick-next btn btn-slider' data-aos='flip-right'><img src='image/section_photo2-next.jpg' alt='next'></button>",
    responsive: [
      {
        breakpoint: 691,
        settings: {
          nfinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  });
});

$(document).ready(function () {
  $(".slider_about_club_block-wrapp").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    prevArrow:
      "<button type='button' class='slick-prev btn btn-slider'  data-aos='flip-left'><img src='image/section_photo2-previous.jpg' alt='previous'></button>",
    nextArrow:
      "<button type='button' class='slick-next btn btn-slider' data-aos='flip-right'><img src='image/section_photo2-next.jpg' alt='next'></button>",
    responsive: [
      {
        breakpoint: 591,
        settings: {
          infinite: true,
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          arrows: false,
        },
      },
    ],
  });
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 90) {
    $(".header-top").addClass("header-top_fixed");
  } else {
    $(".header-top").removeClass("header-top_fixed");
  }
});

$(window).scroll(function () {
  if ($(this).scrollTop() > 90) {
    $(".header_gallery-wrapper").addClass("header_gallery-wrapper_fixed");
  } else {
    $(".header_gallery-wrapper").removeClass("header_gallery-wrapper_fixed");
  }
});

$(".mobile-menu").click(function () {
  $(".mobile-menu span").toggleClass("active");
  $(".nav").toggleClass("open");
  $(".menu").toggleClass("active");
  $("body").toggleClass("owerlay");
});

AOS.init({ duration: 1500 });
