import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.juri__slider-wrapper', {
  modules: [Navigation],
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disabledClass: 'slider-button--disabled',
  },
  spaceBetween: 40,
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1366: {
      slidesPerView: 4,
    }
  }
});

document.querySelector('.juri').querySelector('.swiper-wrapper').style.height = '300px';
