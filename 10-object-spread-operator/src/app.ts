const pizza = {
  name: 'Pepperoni',
};

const toppings = ['pepperoni'];

const order = Object.assign({}, pizza, { toppings });

const spreadOrder = { ...pizza, toppings };

console.log(order, spreadOrder);
