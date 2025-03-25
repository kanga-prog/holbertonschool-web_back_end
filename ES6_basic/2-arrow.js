export default function getNeighborhoodsList() {
  this.sanFranciscoNeighborhoods = ['SOMA', 'Union Square'];

  // Utilisation de la syntaxe fléchée pour addNeighborhood
  this.addNeighborhood = (newNeighborhood) => {
    this.sanFranciscoNeighborhoods.push(newNeighborhood);  // `this` fait référence au bon contexte
    return this.sanFranciscoNeighborhoods;
  };
}

