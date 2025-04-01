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

// Appel de la fonction avec success = false
getFullResponseFromAPI(false)
  .then((response) => {
    console.log(response); // Cette partie ne sera pas appelée si la promesse est rejetée
  })
  .catch((error) => {
    console.error(error); // Cette partie gère l'erreur si la promesse est rejetée
  });

export default getFullResponseFromAPI;
