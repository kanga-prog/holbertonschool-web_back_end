export default function taskBlock(trueOrFalse) {
  const task = false; // Utilisation de let pour la portée de bloc
  const task2 = true; // Utilisation de let pour la portée de bloc

  if (trueOrFalse) {
    const task = true; // Nouvelle variable task dans le bloc conditionnel
    const task2 = false; // Nouvelle variable task2 dans le bloc conditionnel
  }

  return [task, task2]; // Retour des variables
}
