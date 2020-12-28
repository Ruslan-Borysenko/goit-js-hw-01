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

  if (quantity > 0) {
    const totalPrice = pricePerDroid * quantity;
    inputRef.value = '';

    if (totalPrice > credits) {
      return alert('Недостаточно средств на счету!');
    }

    if (totalPrice <= credits) {
      credits -= totalPrice;
      return alert(
        `Вы купили ${quantity} дроидов, на счету осталось ${credits}  кредитов.`,
      );
    }
  }
  if (quantity <= 0) {
    return alert('Минимальная сумма заказа: 1');
  }
});
