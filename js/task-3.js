const inputRef = document.querySelector('.task3__input');
const buttonEnterRef = document.querySelector('.task3__button-enter');
const buttonExitRef = document.querySelector('.task3__button-exit');

buttonExitRef.addEventListener('click', () => {
  console.log('Отменено пользователем!');
  inputRef.value = '';
});

buttonEnterRef.addEventListener('click', () => {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  let password = inputRef.value;
  let message;

  if (password === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    inputRef.value = '';
  } else {
    message = 'Доступ запрещен, неверный пароль!';
  }

  console.log(message);
});
