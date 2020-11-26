const inputRef = document.querySelector('.task4__input');
const buttonExitRel = document.querySelector('.task4__button-exit');
const buttonEnterRel = document.querySelector('.task4__button-enter');

buttonExitRel.addEventListener('click', function() {
    console.log('Отменено пользователем!');
    inputRef.value = '';

});

buttonEnterRel.addEventListener('click', function () {
    let credits = 23580;
    const pricePerDroid = 3000;
    const quantity = Number(inputRef.value);

    if (quantity > 0) {
        const totalPrice = pricePerDroid * quantity;
        inputRef.value = '';


        if (totalPrice > credits) {
            console.log('Недостаточно средств на счету!');

        } else {
            credits -= totalPrice;
            console.log(`Вы купили ${quantity} дроидов, на счету осталось ${credits}  кредитов.`);
            

        }
    } else {
        console.log('Минимальная сумма заказа: 1');
    }
});