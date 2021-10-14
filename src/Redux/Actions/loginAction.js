import axios from "axios";

const login = (user) => async (dispatch) => {
  console.log("user in login Action", user);
  dispatch({ type: "LOGIN_REQUEST" });
  try {
    const response = await axios.post(`http://34.210.129.167//api/login`, user);
    console.log("response.data.token", response.data.token);
    dispatch({ type: "LOGIN_REQUEST_SUCCESS", payload: response });
    localStorage.setItem(
      "login",
      JSON.stringify({
        userLogin: true,
        token: response.data.token,
      })
    );
  } catch (error) {
    dispatch({ type: "LOGIN_REQUEST_FAILURE", payload: error });
  }
};
export default login;
