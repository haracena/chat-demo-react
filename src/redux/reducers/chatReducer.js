import { types } from "../types/types"

const initialState = {
  activeUsers: [],
  activeUsersLoading: false
}

export const chatReducer = (state = initialState, {type, payload}) => {
  switch (type) {
    case types.CHAT_GET_REALTIME_USERS:
      return {
        ...state,
        activeUsers: [payload]
      }
    
    case types.CHAT_GET_REALTIME_USERS_FETCH:
      return  {
        ...state,
        activeUsersLoading: payload
      }

    default:
      return state
  }
}