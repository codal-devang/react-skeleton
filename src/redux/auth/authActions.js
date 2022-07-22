import { LOGIN, LOGOUT, UPDATE } from './authTypes'

export const login = userData => ({
    type: LOGIN,
    payload: userData,
  });
  
  export const logout = () => ({
    type: LOGOUT,
  });
  
  export const update = userData => ({
    type: UPDATE,
    payload: userData,
  });
  