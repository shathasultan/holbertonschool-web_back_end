import Car from './10-car';

describe('car class', () => {
  it('constructor throws error for invalid brand', () => {
    expect.assertions(1);
    expect(() => new Car(123, 'V8', 'red')).toThrow('Brand must be a string');
  });

  it('constructor throws error for invalid motor', () => {
    expect.assertions(1);
    expect(() => new Car('Ford', 123, 'red')).toThrow('Motor must be a string');
  });

  it('constructor throws error for invalid color', () => {
    expect.assertions(1);
    expect(() => new Car('Ford', 'V8', 123)).toThrow('Color must be a string');
  });

  it('creates instance with valid parameters', () => {
    expect.assertions(3);
    const car = new Car('Ford', 'V8', 'red');
    expect(car._brand).toBe('Ford');
    expect(car._motor).toBe('V8');
    expect(car._color).toBe('red');
  });

  it('cloneCar creates a new instance with same properties', () => {
    expect.assertions(4);
    const car = new Car('Ford', 'V8', 'red');
    const clone = car.cloneCar();
    expect(clone._brand).toBe('Ford');
    expect(clone._motor).toBe('V8');
    expect(clone._color).toBe('red');
    expect(clone).not.toBe(car); // Ensure it's a new instance
  });
});
