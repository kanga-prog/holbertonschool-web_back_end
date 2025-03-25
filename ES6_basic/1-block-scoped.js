export default function taskBlock(trueOrFalse) {
  let task = false;  // Utilisation de let pour la portée de bloc
  let task2 = true;   // Utilisation de let pour la portée de bloc

  if (trueOrFalse) {
    let task = true;   // Nouvelle variable task dans le bloc conditionnel
    let task2 = false; // Nouvelle variable task2 dans le bloc conditionnel
  }

  return [task, task2];
}

