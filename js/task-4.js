const inputRef = document.querySelector('.task4__input');
const buttonExitRel = document.querySelector('.task4__button-exit');
const buttonEnterRel = document.querySelector('.task4__button-enter');

buttonExitRel.addEventListener('click', () => {
  console.log('Отменено пользователем!');
  inputRef.value = '';
});

buttonEnterRel.addEventListener('click', () => {
  let credits = 23580;
  const pricePerDroid = 3000;
  const quantity = Number(inputRef.value);
  inputRef.value = '';
  const totalPrice = pricePerDroid * quantity;

  if (quantity <= 0) {
    alert('Минимальная сумма заказа: 1');
    return;
  }
  if (totalPrice > credits) {
    alert('Недостаточно средств на счету!');
    return;
  }
  if (totalPrice <= credits) {
    credits -= totalPrice;
    alert(
      `Вы купили ${quantity} дроидов, на счету осталось ${credits}  кредитов.`,
    );
    return;
  }
});
