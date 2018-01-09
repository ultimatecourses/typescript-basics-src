let coupon: string | null = 'pizza25';

function removeCoupon(): void {
  coupon = null;
}

console.log(coupon);

removeCoupon();

console.log(coupon);
