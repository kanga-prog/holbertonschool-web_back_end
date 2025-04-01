function getFullResponseFromAPI(success) {
  return new Promise((resolve, reject) => {
    if (success) {
      resolve({
        status: 200,
        body: 'Success',
      });
    } else {
      reject(new Error('The fake API is not working currently'));
    }
  });
}

// Appel de la fonction avec success = false, sans utiliser .catch()
getFullResponseFromAPI(false)
  .then((response) => {
    console.log(response); // Ce bloc sera ignoré si la promesse est rejetée
  }, (error) => {
    console.error(error); // Gestion des erreurs ici, dans le .then()
  });

export default getFullResponseFromAPI;
