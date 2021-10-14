import axios from "axios";

const getAllUser = (tokenData, page) => async (dispatch) => {
  dispatch({ type: "GET_ALL_USER_REQUEST" });
  try {
    const response = await axios.get(`http://34.210.129.167/api/users?page=${page}`, {
      headers: {
        Authorization: "Bearer" + tokenData,
        "Content-Type": "application/json",
      },
    });
    console.log("response of all Users", response.data.users.data);
    dispatch({
      type: "GET_ALL_USER_REQUEST_SUCCESS",
      payload: response.data.users.data,
    });
  } catch (error) {
    dispatch({ type: "GET_ALL_USER_REQUEST_FAILURE", payload: error });
  }
};
export default getAllUser;

 