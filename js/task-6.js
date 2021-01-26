let total = 0;

while (true) {
  // const userInput = prompt('Введите чило');
  // const number = Number(userInput);
  const number = Number(prompt('Введите чило'));
  if (!number) {
    alert('Отменено пользователем. Total=' + total);
    break;
  }
  if (!Number.isNaN(number)) {
    total += number;
  }
}
