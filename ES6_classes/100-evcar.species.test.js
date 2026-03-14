import EVCar from './100-evcar';
import Car from './10-car';

describe('species is correctly implemented on EVCar', () => {
  it('species is correctly implemented on EVCar', () => {
    expect.hasAssertions();
    const tesla = new EVCar('Tesla', 'Electric', 'Red', '500');
    const newCar = tesla.cloneCar();

    expect(newCar instanceof EVCar).toBe(false);
    expect(newCar instanceof Car).toBe(true);
  });
});
