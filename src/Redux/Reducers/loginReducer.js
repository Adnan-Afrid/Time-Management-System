const initialState = {
  user: null,
  loggedIn: false,
  error: null,
};
const loginReducer = (state = initialState, action) => {
  console.log("action = ", action);
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        ...state,
      };
    case "LOGIN_REQUEST_SUCCESS":
      console.log("action.payload in loginreducer = ", action.payload);
      return {
        ...state,
        user: action.payload,
        loggedIn: true,
      };
    case "LOGIN_REQUEST_FAILURE":
      return {
        ...state,
        error: action.payload,
        loggedIn: false,
      };
    default:
      return state;
  }
};

export default loginReducer;
