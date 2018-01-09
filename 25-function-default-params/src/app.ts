let sumOrder: (price: number, quantity?: number) => number;

sumOrder = (x, y = 1) => x * y;

const sum = sumOrder(25, 5);

console.log(`Total sum: ${sum}`);
