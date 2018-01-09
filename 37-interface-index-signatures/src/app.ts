interface Sizes {
  sizes: string[];
}

interface Pizza extends Sizes {
  name: string;
  toppings?: number;
  getAvailableSizes(): void;
  [key: number]: string;
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
pizza[1] = 'xyz';
pizza.toppings = 1;
