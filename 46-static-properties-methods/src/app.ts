class Coupon {
  static allowed = ['Pepperoni', 'Blazing Inferno'];
  static create(percentage: number) {
    return `PIZZA_RESTAURANT_${percentage}`;
  }
}

console.log(Coupon.create(25));
