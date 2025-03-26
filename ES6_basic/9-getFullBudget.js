import getBudgetObject from './7-getBudgetObject.js';

export default function getFullBudgetObject(income, gdp, capita) {
  const budget = getBudgetObject(income, gdp, capita);
  const fullBudget = {
    ...budget,
    getIncomeInDollars(income) {
      // Si income est déjà une chaîne avec un $, on ne l'ajoute pas de nouveau
      if (income.startsWith('$')) {
        return income; // Retourner directement la valeur si elle commence déjà par $
      }
      return `$${income}`;
    },
    getIncomeInEuros(income) {
      // Ajout d'un suffixe "euros" même si income commence déjà par un symbole monétaire
      return `${income} euros`;
    },
  };

  return fullBudget;
}