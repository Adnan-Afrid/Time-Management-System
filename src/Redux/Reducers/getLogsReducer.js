const initialState = {
  logs: null,
  error: null,
};
const getLogsReducer = (state = initialState, action) => {
  console.log("action = ", action);
  switch (action.type) {
    case "GET_LOGS_REQUEST":
      return {
        ...state,
      };
    case "GET_LOGS_REQUEST_SUCCESS":
      return {
        ...state,
        logs: action.payload,
      };
    case "GET_LOGS_REQUEST_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getLogsReducer;
