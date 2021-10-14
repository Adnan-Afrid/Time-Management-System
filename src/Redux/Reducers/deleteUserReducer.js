const initialState = {
    message: null,
    success:false,
    error: null,
  };
  const deleteUserReducer = (state = initialState, action) => {
    switch (action.type) {
      case "DELETE_USER_REQUEST":
        return {
          ...state,
        };
      case "DELETE_USER_REQUEST_SUCCESS":
        return {
          ...state,
          message: action.payload,
          success: true
        };
      case "DELETE_USER_REQUEST_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default deleteUserReducer;
  