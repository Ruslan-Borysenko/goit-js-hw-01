const total = 100;
let ordered = 20;

ordered = 50;
ordered = 80;
ordered = 130;

// if (total < ordered) {
//     console.log(`На складе недостаточно твоаров!`);
// } else {
//     console.log(`Заказ оформлен, с вами свяжется менеджер.`);
// }

const result =
  total < ordered
    ? `На складе недостаточно твоаров!`
    : `Заказ оформлен, с вами свяжется менеджер.`;

console.log(result);
