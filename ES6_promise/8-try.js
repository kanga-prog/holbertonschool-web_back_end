export default function divideFunction(numerator, denominator) {
    // Vérification si le dénominateur est égal à zéro
    if (denominator === 0 || numerator === 0 ) {
      // Si le dénominateur est zéro, on lance une erreur
      throw new Error('cannot divide by 0');
    }
  
    // Si le dénominateur n'est pas zéro, on effectue la division
    return numerator / denominator;
  }
  