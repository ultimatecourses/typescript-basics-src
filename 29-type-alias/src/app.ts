type Size = 'small' | 'medium' | 'large';
type Callback = (size: Size) => void;

let pizzaSize: Size = 'small';

const selectSize: Callback = x => {
  pizzaSize = x;
};

selectSize('medium');
