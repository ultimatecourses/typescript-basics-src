let pizzaSize: string = 'small';

function selectSize(size: 'small' | 'medium' | 'large'): void {
  pizzaSize = size;
}

selectSize('large');

console.log(`Pizza size: ${pizzaSize}`);
