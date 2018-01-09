interface Pizza {
  name: string;
  sizes: string[];
}

let pizza: Pizza;

function createPizza(name: string, sizes: string[]): Pizza {
  return {
    name,
    sizes,
  };
}

pizza = createPizza('Pepperoni', ['small', 'medium']);
