class Building {
  constructor(sqft) {
    if (this.constructor === Building) {
      throw new Error('Cannot instantiate abstract class Building');
    }

    if (typeof this.evacuationWarningMessage !== 'function') {
      throw new Error('Class extending Building must override evacuationWarningMessage');
    }

    this._sqft = sqft;
  }

  get sqft() {
    return this._sqft;
  }

  // Désactiver la règle "class-methods-use-this" pour cette méthode spécifique
  /* eslint-disable-next-line class-methods-use-this */
  evacuationWarningMessage() {
    throw new Error('Class extending Building must override evacuationWarningMessage');
  }
}

export default Building;
