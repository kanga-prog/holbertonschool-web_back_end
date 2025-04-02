import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  // Utilisation de Promise.all pour résoudre les deux promesses en même temps
  const response = Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const [photoResponse, userResponse] = response;
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
      return response; // Nous retournons ici la constante 'response' contenant les deux résultats
    })
    .catch(() => {
      // Si l'une des promesses échoue, on affiche ce message
      console.log('Signup system offline');
      return null; // On retourne 'null' en cas d'erreur
    });

  return response; // Retourner la promesse 'response'
}
