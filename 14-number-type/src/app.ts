const pizzaCost: number = 10;
const pizzaToppings: number = 5;

function calculatePrice(cost: number, toppings: number): number {
  return cost + 1.5 * toppings;
}

const cost: number = calculatePrice(pizzaCost, pizzaToppings);
console.log(`Pizza costs: ${cost}`);
