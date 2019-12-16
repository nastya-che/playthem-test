export const FETCH_USERS_SUCCESS = 'FETCH_USERS_SUCCESS';
export const REMOVE_USER_CARD = 'REMOVE_USER_CARD';

export const fetchUsersSuccess = users => ({
  type: FETCH_USERS_SUCCESS,
  payload: {users}
});

export const removeUserCard = userId => ({
  type: REMOVE_USER_CARD,
  userId
});
