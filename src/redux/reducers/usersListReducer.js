import {FETCH_USERS_SUCCESS, REMOVE_USER_CARD} from '../actions/usersActions';

const defaultState = {
   items: []
};

export const usersListReducer = (state = defaultState, action) => {
   switch (action.type) {
      case FETCH_USERS_SUCCESS:
         return {
            items: action.payload.users
         };
      case REMOVE_USER_CARD:
         return {
            items: state.items.filter((user, index) => {
               return index !== action.userId
            })
         };
      default:
         return{
            state
         }
   }
};