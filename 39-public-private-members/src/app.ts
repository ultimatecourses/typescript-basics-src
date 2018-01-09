class Pizza {
  public toppings: string[] = [];

  constructor(private name: string) {}

  public addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');

console.log(pizza);
