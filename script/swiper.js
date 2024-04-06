
const swiper01 = new Swiper('#swiper-brand', {
  loop: true,
  slidesPerView: 5,
    pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    dynamicBullets: true
  },
  breakpoints: {
      768: {
          slidesPerView: 2,
          spaceBetween: 30
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30
      },
      1200: {
        slidesPerView: 5,
      },
  }
});


var swiper = new Swiper('.swiper-container.swiper-one', {
  loop: true,
  speed: '1450',
  spaceBetween: 20,
  parallax: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: 'true',
    dynamicBullets: true
  },
    autoplay: {
      delay: 6500,
   },
});



// breakpoints: {
//     1920: {
//         slidesPerView: 1,
//         spaceBetween: 30
//     },
//     1028: {
//         slidesPerView: 1,
//         spaceBetween: 30
//     },
//     480: {
//         slidesPerView: 1,
//         spaceBetween: 10
//     }
// }

var galleryThumbs = new Swiper('.gallery-thumbs', {
  spaceBetween: 10,
  slidesPerView: 4,
});
var galleryTop = new Swiper('.gallery-top', {
  spaceBetween: 10,
  thumbs: {
    swiper: galleryThumbs
  }
});

