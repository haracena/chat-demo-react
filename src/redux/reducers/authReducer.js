import { types } from "../types/types"

const initialState =  {
  uid: '',
  name: '',
  email: '',
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
    
    default:
      return state;
  }
}