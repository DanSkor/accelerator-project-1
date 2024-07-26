const form = document.querySelector('.form__content');
const inputName = document.querySelector('.form__input--name');
const errorName = document.querySelector('.form__error--name');
const inputTel = document.querySelector('.form__input--tel');
const errorTel = document.querySelector('.form__error--tel');

const validationName = () => {
  const validate = true;

}

const validationTel = () => {
  const validate = true;
  console.log(inputTel.value.length)
  if (inputTel.value.length === 0) {
    errorTel.style.display = 'block';
    errorTel.textContent = 'Введите номер теелфона';
    inputTel.classList.add('form__input--error')
    inputTel.addEventListener('input', ()=> {
      inputTel.classList.remove('form__input--error');
      errorTel.style.display = 'none';
    })
  }
}

form.addEventListener('submit', (evt)=> {
    evt.preventDefault();
    validationTel();
})
