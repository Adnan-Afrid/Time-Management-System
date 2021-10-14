import axios from "axios";

const UserSignup = (user, tokenData) => async (dispatch) => {
  dispatch({ type: "USER_SIGNUP_REQUEST" });
  try {
    const headers = {
      "Content-Type": "application/json",
      Authorization: "Bearer" + tokenData
    };

    const response = await axios.post(
      `http://34.210.129.167/api/users`,
      user,
      {
        headers: headers,
      }
    );
    console.log("response of User signup", response);
    dispatch({ type: "USER_SIGNUP_REQUEST_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "USER_SIGNUP_REQUEST_FAILURE", payload: error });
  }
};
export default UserSignup;
