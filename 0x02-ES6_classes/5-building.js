export default class Building {
  constructor(sqft) {
    if (this.constructor !== Building) {
      const p = Object.getOwnPropertyNames(this.constructor.prototype);
      if (!p.find((e) => e === 'evacuationWarningMessage')) {
        throw new Error('Class extending Building must override evacuationWarningMessage');
      }
    }
    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  set sqft(sqft) {
    if ((typeof sqft !== 'number') && (sqft instanceof Number)) {
      throw new TypeError('Sqft must be a number');
    }
    this._sqft = sqft;
  }
}
