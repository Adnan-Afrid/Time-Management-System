const initialState = {
  users: [],
  error: null,
};
const getAllUserReducer = (state = initialState, action) => {
  console.log("action = ", action);
  switch (action.type) {
    case "GET_ALL_USER_REQUEST":
      return {
        ...state,
      };
    case "GET_ALL_USER_REQUEST_SUCCESS":
      return {
        ...state,
        users: action.payload,
      };
    case "GET_ALL_USER_REQUEST_FAILURE":
      return {
        ...state,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default getAllUserReducer;
