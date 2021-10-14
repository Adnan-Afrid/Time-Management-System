import axios from "axios";

const deleteUser = (id, tokenData) => async (dispatch) => {
    console.log("delete user id is", id)
  dispatch({ type: "DELETE_USER_REQUEST" });
  try {
    const response = await axios.delete(`http://34.210.129.167/api/users/`+id, {
      headers: {
        Authorization: "Bearer" + tokenData,
        "Content-Type": "application/json",
      },
    });
    console.log("response of deleteUserAction", response);
    dispatch({
      type: "DELETE_USER_REQUEST_SUCCESS",
      payload: response,
    });
  } catch (error) {
    dispatch({ type: "DELETE_USER_REQUEST_FAILURE", payload: error });
  }
};
export default deleteUser;
