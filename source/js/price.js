const buttons = document.querySelectorAll('.price__button');
const rubleSpan = '<span class="card__rubles"><span class="visually-hidden">рублей.</span></span>';

const price1Month = {
  coach: 5000,
  day: 1700,
  fullDay: 2700,
};

const price6Months = {
  coach: 30000,
  day: 10200,
  fullDay: 16200,
};

const price12Months = {
  coach: 60000,
  day: 20400,
  fullDay: 32400,
};

const priceUpdate = (rate) => {
  const priceCoach = document.querySelector('.card--coach');
  const priceDay = document.querySelector('.card--day');
  const priceFullDay = document.querySelector('.card--fullday');

  priceCoach.querySelector('.card__price').innerHTML = `${rate.coach}${rubleSpan}`;
  priceCoach.querySelector('.card__price').dataset.price = rate.coach;
  priceDay.querySelector('.card__price').innerHTML = `${rate.day}${rubleSpan}`;
  priceDay.querySelector('.card__price').dataset.price = rate.day;
  priceFullDay.querySelector('.card__price').innerHTML = `${rate.fullDay}${rubleSpan}`;
  priceFullDay.querySelector('.card__price').dataset.price = rate.fullDay;
};

for (const button of buttons) {
  button.addEventListener('click', ()=> {
    if (!button.classList.contains('price__button--current')) {
      buttons.forEach((item) => item.classList.remove('price__button--current'));
      button.classList.add('price__button--current');

      if (button.classList.contains('price__button--1month')) {
        priceUpdate(price1Month);
      } else if (button.classList.contains('price__button--6months')) {
        priceUpdate(price6Months);
      } else if (button.classList.contains('price__button--12months')) {
        priceUpdate(price12Months);
      }
    }
  });
}
