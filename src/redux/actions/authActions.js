const { myFirebase } = require("../../firebase/firebase-config");
const { types } = require("../types/types");

export const startLoginWithEmailPassword = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(fetchingLogin(true));
      const { user } = await myFirebase.auth().signInWithEmailAndPassword(email, password);
      dispatch(login(user.uid, user.email));
      dispatch(fetchingLogin(false));
    } catch (e) {
      console.log(e);
    }
  }
}

export const login = (uid, displayEmail) => ({
  type: types.AUTH_LOGIN,
  payload: {
    uid,
    displayEmail
  }
});

const fetchingLogin = (isFetching) => ({
  type: types.AUTH_FETCHING_LOGIN,
  payload: isFetching,
})

export const startLogout = () => {
  return async (dispatch) => {
    try {
      await myFirebase.auth().signOut();
      dispatch(logout());
    } catch (error) {
      console.log(error);
    }
  }
}

const logout = () => ({
  type: types.AUTH_LOGOUT
})