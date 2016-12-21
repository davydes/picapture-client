/*
 * Main API
 *
 *
*/

function loginUser(credentials) {
  console.log(`Login User API ${credentials}`);
  return {
    token: 'secured-token',
  };
}

export default { loginUser };
