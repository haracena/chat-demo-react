const { myFirebase } = require('../../firebase/firebase-config');
const { types } = require('../types/types');

export const startLoginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(fetchingLogin(true));
      const { user } = await myFirebase
        .auth()
        .signInWithEmailAndPassword(email, password);
      console.log(user);
      // await user.updateProfile({
      //   displayName: 'Javiera Pérez',
      //   photoURL: 'https://i.imgur.com/8iLrK3r.jpg',
      // });
      dispatch(login(user.uid, user.email, user.displayName, user.photoURL));
      dispatch(fetchingLogin(false));
    } catch (e) {
      console.log(e.code);
      dispatch(authError(e.code));
    }
  };
};

export const login = (uid, displayEmail, displayName, photoURL) => ({
  type: types.AUTH_LOGIN,
  payload: {
    uid,
    displayEmail,
    displayName,
    photoURL
  },
});

const fetchingLogin = (isFetching) => ({
  type: types.AUTH_FETCHING_LOGIN,
  payload: isFetching,
});

export const startLogout = () => {
  return async (dispatch) => {
    try {
      await myFirebase.auth().signOut();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  };
};

const logout = () => ({
  type: types.AUTH_LOGOUT,
});

const authError = (error) => ({
  type: types.AUTH_ERROR,
  payload: error
});
