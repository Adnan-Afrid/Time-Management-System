const initialState = {
    msg: null,
    error: null,
  };
  const signupReducer = (state = initialState, action) => {
    switch (action.type) {
      case "SIGNUP_REQUEST":
        return {
          ...state,
        };
      case "SIGNUP_REQUEST_SUCCESS":
        return {
          ...state,
          msg: action.payload,
        };
      case "SIGNUP_REQUEST_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default signupReducer;
  