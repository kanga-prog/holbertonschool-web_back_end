import Currency from './3-currency.js';

class Pricing {
  constructor(amount, currency) {
    this._amount = amount;
    this._currency = currency;
  }

  // Getter et setter pour amount
  get amount() {
    return this._amount;
  }

  set amount(value) {
    if (typeof value !== 'number') {
      throw new Error('Amount must be a number');
    }
    this._amount = value;
  }

  // Getter et setter pour currency
  get currency() {
    return this._currency;
  }

  set currency(value) {
    if (!(value instanceof Currency)) {
      throw new Error('Currency must be an instance of Currency');
    }
    this._currency = value;
  }

  // Méthode pour afficher le prix complet
  displayFullPrice() {
    return `${this._amount} ${this._currency.name} (${this._currency.code})`;
  }

  // Méthode statique pour la conversion des prix
  static convertPrice(amount, conversionRate) {
    if (typeof amount !== 'number' || typeof conversionRate !== 'number') {
      throw new Error('Both amount and conversion rate must be numbers');
    }
    return amount * conversionRate;
  }
}

export default Pricing;
