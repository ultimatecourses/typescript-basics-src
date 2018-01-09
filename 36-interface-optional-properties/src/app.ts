interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  toppings?: number;
  getAvailableSizes(): void;
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
    getAvailableSizes() {
      return this.sizes;
    },
  };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);

pizza.toppings = 1;
