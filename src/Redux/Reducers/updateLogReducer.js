const initialState = {
    result: null,
    error: null,
  };
  const updateLogReducer = (state = initialState, action) => {
    switch (action.type) {
      case "UPDATE_LOG_REQUEST":
        return {
          ...state,
        };
      case "UPDATE_LOG_REQUEST_SUCCESS":
        return {
          ...state,
          result: action.payload,
        };
      case "UPDATE_LOG_REQUEST_FAILURE":
        return {
          ...state,
          error: action.payload,
        };
      default:
        return state;
    }
  };
  
  export default updateLogReducer;
  