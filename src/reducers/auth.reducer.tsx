import {AUTH
  } from '../actions/auth.constant';
  
  const initialState = {
    getListLoading: false,
    posts: [],
  };
  
;
  
  const authReducer = (state = initialState, action:any) => {
    switch (action.type) {
      case AUTH:
        return {

        }
      default:
        return state;
    }
  };
  
  export default authReducer;