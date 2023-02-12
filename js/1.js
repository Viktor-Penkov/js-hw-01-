let salary = prompt("Введіть розмір вашої зарплати")
console.log(Number(salary));
const premium = salary * 0.15 ;
console.log(premium .toFixed(2));
const tax = (Number(salary) + premium) * 0.1;
console.log(tax .toFixed(2));
const outlay = 190;
console.log(outlay)
const res = Number(salary) + premium - tax - outlay
console.log(res .toFixed(2))

alert("Ваш залишок коштів : " + res);


