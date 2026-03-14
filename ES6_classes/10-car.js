export default class Car {
  constructor(brand, motor, color) {
    // if (typeof brand !== 'string') {
    //   throw TypeError('Brand must be a string');
    // }
    // if (typeof motor !== 'string') {
    //   throw TypeError('Motor must be a string');
    // }
    // if (typeof color !== 'string') {
    //   throw TypeError('Color must be a string');
    // }

    this._brand = brand;
    this._motor = motor;
    this._color = color;
  }

  cloneCar() {
    // return new Car(
    //   String(this._brand),
    //   String(this._motor),
    //   String(this._color),
    // );
    return new this.constructor[Symbol.species]();
  }
}
