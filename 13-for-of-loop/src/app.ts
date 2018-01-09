const toppings = ['pepperoni', 'mushrooms', 'chilli'];

const pizzaName = 'Pepperoni';

for (const letter of pizzaName) {
  console.log(letter);
}

for (var i = 0; i < toppings.length; i++) {
  console.log(toppings[i]);
}

toppings.forEach(topping => console.log(topping));

for (const topping of toppings) {
  console.log(topping);
}
