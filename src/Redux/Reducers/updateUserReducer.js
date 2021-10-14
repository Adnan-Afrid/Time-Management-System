const initialState = {
    result: null,
    error: null,
  };
  const updateUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_USER_REQUEST":
        return {
          ...state,
        };
      case "UPDATE_USER_REQUEST_SUCCESS":
        return {
          ...state,
          result: action.payload,
        };
      case "UPDATE_USER_REQUEST_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default updateUserReducer;
  