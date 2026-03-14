import Pricing from './4-pricing';

test('convertPrice is implemented correctly', () => {
  // Correct way to call a static method
  expect(Pricing.convertPrice(100, 2)).toBe(200);
  expect(Pricing.convertPrice(50, 0.5)).toBe(25);
  expect(Pricing.convertPrice(200, 1)).toBe(200);
});
