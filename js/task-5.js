let cost;
let country;
const inputRef = document.querySelector('.task5__input');
const buttonRef = document.querySelector('.task5__button');

buttonRef.addEventListener('click', function () {
  console.log(inputRef.value);
  console.log(country = inputRef.value);
  console.log(country = country.toLowerCase());
});

switch (country) {
  case 'китай':
    cost = 100;
    console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case 'чили':
    cost = 250;
    console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case 'австралия':
    cost = 170;
    console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;
    
    case 'индия':
    cost = 80;
    console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  case 'ямайка':
    cost = 120;
    console.log(`Доставка в ${country} будет стоить ${cost} кредитов`);
    break;

  default:
    alert('В вашей стране доставка не доступна');
}
