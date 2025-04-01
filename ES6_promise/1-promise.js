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


const promise1 = getFullResponseFromAPI(true);
promise1.then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error); 
});

const promise2 = getFullResponseFromAPI(false);
promise2.then((response) => {
  console.log(response);
}).catch((error) => {
  console.error(error);
});

console.log(promise1); 
console.log(promise2);

export default getFullResponseFromAPI;
