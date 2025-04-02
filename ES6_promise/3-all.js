import { uploadPhoto, createUser } from './utils';

function handleProfileSignup() {
  const newPromise = Promise.all([uploadPhoto(), createUser()])
    .then(([photoResponse, userResponse]) => {
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
    })
    .catch(() => {
      console.log('Signup system offline');
      return newPromise;
    });
}

export default handleProfileSignup;
