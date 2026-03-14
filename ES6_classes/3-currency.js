export default class Currency {
  constructor(code, name) {
    if (typeof code !== 'string') {
      throw TypeError('Code must be a string');
    }
    if (typeof name !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._code = code;
    this._name = name;
  }

  get code() {
    return this._code;
  }

  set code(newCode) {
    if (typeof newCode !== 'string') {
      throw TypeError('Code must be a string');
    }
    this._code = newCode;
  }

  get name() {
    return this._name;
  }

  set name(newname) {
    if (typeof newname !== 'string') {
      throw TypeError('Name must be a string');
    }
    this._name = newname;
  }

  displayFullCurrency() {
    return `${this._name} (${this._code})`;
  }
}
