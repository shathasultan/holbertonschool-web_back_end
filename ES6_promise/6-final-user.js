import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

export default function handleProfileSignup(firstName, lastName, fileName) {
  const signUpPromise = signUpUser(firstName, lastName);
  const uploadPromise = uploadPhoto(fileName);

  return Promise.allSettled([signUpPromise, uploadPromise])
    .then((results) =>
      results.map((r) => ({
        status: r.status,
        value: r.status === 'fulfilled'
          ? r.value
          : (r.reason instanceof Error ? r.reason.toString() : r.reason),
      }))
    );
}
