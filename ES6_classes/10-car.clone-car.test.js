import Car from './10-car';

describe('car cloneCar', () => {
  it('should create a clone with the same species', () => {
    expect.assertions(4);
    const car = new Car('Ford', 'V8', 'red');
    const clone = car.cloneCar();
    expect(clone).toBeInstanceOf(Car);
    expect(clone._brand).toBe('Ford');
    expect(clone._motor).toBe('V8');
    expect(clone._color).toBe('red');
  });
});
