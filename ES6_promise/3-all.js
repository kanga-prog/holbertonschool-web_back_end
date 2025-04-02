import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const response = Promise.all([uploadPhoto(), createUser()])
    .then((response) => {
      const [photoResponse, userResponse] = response;
      console.log(`${photoResponse.body} ${userResponse.firstName} ${userResponse.lastName}`);
      return response;
    })
    .catch(() => {
      console.log('Signup system offline');
      return null;
    });

  return response;
}
