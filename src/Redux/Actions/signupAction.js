import axios from "axios";

const signup = (user) => async (dispatch) => {
  dispatch({ type: "SIGNUP_REQUEST" });
  try {
    const response = await axios.post(
      `http://34.210.129.167//api/register`,
      user
    );
    dispatch({ type: "SIGNUP_REQUEST_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "SIGNUP_REQUEST_FAILURE", payload: error });
  }
};
export default signup;
