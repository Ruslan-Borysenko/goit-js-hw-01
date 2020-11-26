let userInput;
let total = 0;
let number;

while (true) {
    userInput = prompt('Введите чило');

    number = Number(userInput);
    
    if (Number.isNaN(number) === false) {
        total += number;
    }

    if (userInput === null) {
        console.log('Отменено пользователем');
        console.log(total);
        alert(total);
        break;
    }
}