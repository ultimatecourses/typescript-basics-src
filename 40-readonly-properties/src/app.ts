class Pizza {
  public toppings: string[] = [];

  constructor(readonly name: string) {}

  public addTopping(topping: string) {
    this.toppings.push(topping);
  }
}

const pizza = new Pizza('Pepperoni');

pizza.addTopping('pepperoni');
