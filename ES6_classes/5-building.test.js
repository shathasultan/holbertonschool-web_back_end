import Building from './5-building.js';

describe('Building', () => {
  test('should create a new Building instance', () => {
    const building = new Building(200);
    expect(building.sqft).toBe(200);
  });

  test('should throw error when sqft is not a number', () => {
    expect(() => new Building('200')).toThrow(
      'Square footage must be a number',
    );
  });

  test('should throw error when evacuationWarningMessage is not overridden', () => {
    const building = new Building(200);
    expect(() => building.evacuationWarningMessage()).toThrow(
      'Class extending Building must override evacuationWarningMessage',
    );
  });
});
