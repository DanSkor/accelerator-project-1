import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.review__slider', {
  modules: [Navigation],
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disabledClass: 'slider-button--disabled',
  },
  slidesPerView: 1,
  spaceBetween: 30,
});
