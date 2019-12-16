import {fetchUsersSuccess} from "./usersActions";

export const fetchUsers = () => {
   return dispatch => {
      return fetch('https://reqres.in/api/users/')
         .then(data => data.json())
         .then(json => {
            dispatch(fetchUsersSuccess(json.data));
            return json.data;
         })
   }
};