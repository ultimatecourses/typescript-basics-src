class Pizza {
  name: string;
  toppings: string[] = [];

  constructor(name: string) {
    this.name = name;
  }

  addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);
