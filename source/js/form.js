const form = document.querySelector('.form__content');
const inputName = document.querySelector('.form__input--name');
const errorName = document.querySelector('.form__error--name');
const inputTel = document.querySelector('.form__input--tel');
const errorTel = document.querySelector('.form__error--tel');

const letters = ' абвгдеёжзийклмнопрстуфхцчшщъыьэюя';
const numbers = '0123456789';

const validationName = (event) => {
  const name = inputName.value;

  if (name.length === 0) {
    event.preventDefault();
    errorName.style.display = 'block';
    errorName.textContent = 'Введите свое имя';
    inputName.classList.add('form__input--error');
    inputName.addEventListener('input', ()=> {
      inputName.classList.remove('form__input--error');
      errorName.style.display = 'none';
    });
  }

  for (let i = 0; i < name.length; i++) {
    if (!letters.includes(name[i]) && !letters.includes(name[i].toLowerCase())) {
      event.preventDefault();
      errorName.style.display = 'block';
      errorName.textContent = 'Укажите только буквы (кириллица)';
      inputName.classList.add('form__input--error');
      inputName.addEventListener('input', ()=> {
        inputName.classList.remove('form__input--error');
        errorName.style.display = 'none';
      });
    }
  }
};

const validationTel = (event) => {
  const tel = inputTel.value;
  if (tel.length === 0) {
    event.preventDefault();
    errorTel.style.display = 'block';
    errorTel.textContent = 'Введите номер теелфона';
    inputTel.classList.add('form__input--error');
    inputTel.addEventListener('input', ()=> {
      inputTel.classList.remove('form__input--error');
      errorTel.style.display = 'none';
    });
  }

  for (let i = 0; i < tel.length; i++) {
    if (!numbers.includes(tel[i])) {
      errorTel.style.display = 'block';
      errorTel.textContent = 'Необходимо указать цифры';
      inputTel.classList.add('form__input--error');
      inputTel.addEventListener('input', ()=> {
        inputTel.classList.remove('form__input--error');
        errorTel.style.display = 'none';
      });
    }
  }
};

form.addEventListener('submit', (evt)=> {
  validationName(evt);
  validationTel(evt);
});
