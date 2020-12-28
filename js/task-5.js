let cost;
let country;
const inputRef = document.querySelector('.task5__input');
const buttonRef = document.querySelector('.task5__button');

buttonRef.addEventListener('click', () => {
  inputRef.value;
  country = inputRef.value;
  country = country.toLowerCase();

  switch (country) {
    case 'китай':
      cost = 100;
      alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case 'чили':
      cost = 250;
      alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case 'австралия':
      cost = 170;
      alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case 'индия':
      cost = 80;
      alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    case 'ямайка':
      cost = 120;
      alert(`Доставка в ${country} будет стоить ${cost} кредитов`);
      break;

    default:
      alert('В вашей стране доставка не доступна');
  }
});
