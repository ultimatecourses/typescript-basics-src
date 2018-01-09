let selectedTopping: string = 'pepperoni';

function selectTopping(topping: string): void {
  selectedTopping = topping;
}

selectTopping('bacon');

console.log(selectedTopping);
