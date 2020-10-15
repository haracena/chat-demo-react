import { types } from "../types/types"

const initialState =  {
  uid: '',
  displayName: '',
  email: '',
  photoURL: '',
  authLoading: false,
  authError: '',
}

export const authReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.AUTH_LOGIN:
      return {
        ...state,
        uid: payload.uid,
        email: payload.displayEmail,
        displayName: payload.displayName,
        photoURL: payload.photoURL
      }
    
    case types.AUTH_FETCHING_LOGIN:
      return {
        ...state,
        authLoading: payload
      } 
      
    case types.AUTH_LOGOUT:
      return {
        ...initialState
      }

    case types.AUTH_ERROR:
      return {
        ...state,
        authError: payload
      }
    
    default:
      return state;
  }
}