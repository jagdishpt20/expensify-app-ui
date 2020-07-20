
export const login = (userId) => ({
    type: 'LOGIN',
    userId
  });
  
export const startLogin = () => {
    return () => {
      return firebase.auth().signInWithPopup(googleAuthProvider);
    };
};
  
export const logout = () => ({
    type: 'LOGOUT'
});
  
export const startLogout = () => {
   return () => {
      return firebase.auth().signOut();
    };
};

  




















