import { myFirestore } from '../../firebase/firebase-config';
import { types } from '../types/types';

export const startGetRealtimeUsers = () => {
  
  return async (dispatch) => {
    try {
      dispatch(fetchingRealtimeUsers());
      myFirestore.collection('users')
      // .where('state', '==', 'CA')
      .onSnapshot(querySnapshot => {
        const users = [];
        querySnapshot.forEach(doc => {
          users.push(doc.data());
        });
        console.log(users);
        dispatch(addRealtimeUsers(users));
      })
    } catch (error) {
      console.log(error);
    }
  }
}

const addRealtimeUsers = (users) => ({
  type: types.CHAT_GET_REALTIME_USERS,
  payload: users
})

const fetchingRealtimeUsers = (isFetching) => ({
  type: types.CHAT_GET_REALTIME_USERS_FETCH,
  payload: isFetching
})