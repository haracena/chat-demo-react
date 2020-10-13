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

const login = (uid, displayEmail) => ({
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