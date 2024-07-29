import Swiper from 'swiper';
import {Navigation} from 'swiper/modules';
import 'swiper/css';

const swiper = new Swiper('.reviews__slider', {
  modules: [Navigation],
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    disabledClass: 'slider-button--disabled',
  },
  slidesPerView: 1,
  spaceBetween: 30,
});

swiper.update();

const slides = document.querySelector('.reviews__list').querySelectorAll('.swiper-slide');

for (const slide of slides) {
  slide.style.display = 'grid';
}
