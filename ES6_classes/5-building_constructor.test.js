import Building from './5-building';

test('Building is implemented correctly', () => {
  const building = new Building(100);
  expect(building.sqft).toBe(100);
});
