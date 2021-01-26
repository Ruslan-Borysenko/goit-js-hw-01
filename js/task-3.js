const inputRef = document.querySelector('.task3__input');
const buttonEnterRef = document.querySelector('.task3__button-enter');
const buttonExitRef = document.querySelector('.task3__button-exit');

buttonExitRef.addEventListener('click', () => {
  console.log('Отменено пользователем!');
  inputRef.value = '';
});

buttonEnterRef.addEventListener('click', () => {
  const ADMIN_PASSWORD = 'jqueryismyjam';
  const password = inputRef.value;

  if (password === ADMIN_PASSWORD) {
    console.log('Добро пожаловать!');
    inputRef.value = '';
    return;
  }
  console.log('Доступ запрещен, неверный пароль!');
});
