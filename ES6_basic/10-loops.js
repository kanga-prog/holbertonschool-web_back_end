export default function appendToEachArrayValue(array, appendString) {
  for (let value of array) {
    value = appendString + value; // Modifie la valeur temporairement
  }

  return array.map(value => appendString + value); // Crée un nouveau tableau avec les valeurs modifiées
}
