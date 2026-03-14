export default class Building {
  constructor(sqft) {
    if (typeof sqft !== 'number') {
      throw TypeError('Square footage must be a number');
    }
    this._sqft = sqft;
    if (this.constructor !== Building) {
      this.evacuationWarningMessage();
    }
  }

  evacuationWarningMessage() {
    if (this.constructor === Building) {
      throw new Error(
        'Class extending Building must override evacuationWarningMessage',
      );
    }
    throw new Error(
      'Class extending Building must override evacuationWarningMessage',
    );
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(newSqft) {
    if (typeof newSqft !== 'number') {
      throw TypeError('Square footage must be a number');
    }
    this._sqft = newSqft;
  }
}
