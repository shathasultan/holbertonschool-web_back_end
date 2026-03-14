import Building from './5-building';

test('Building forces override', () => {
  class TestBuilding extends Building {}
  expect(() => {
    new TestBuilding(200);
  }).toThrowError(
    'Class extending Building must override evacuationWarningMessage',
  );
});
