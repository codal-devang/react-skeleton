import { LOGIN, LOGOUT, UPDATE } from './authTypes'
const auth = {
    isLogin: false,
    user: {},
  };
  
  const AuthReducer = (state = auth, action) => {
    switch (action.type) {
      case LOGIN:
        // delete action.type;
        return {
          isLogin: true,
          user: action.payload,
        };
      case LOGOUT:
        return { isLogin: false };
      case UPDATE:
        // delete action.type;
        return {
          ...state,
          user: action.payload,
        };
      default:
        return { ...state };
    }
  };
  
  export default AuthReducer;
  