import axios from "axios";

const updateUser = (user, tokenData, userId) => async (dispatch) => {
  const firstName = user.firstName;
  const lastName = user.lastName; //Destructure user Object beacuse of Strange value coming from React Modal
  const email = user.email; //Despite that there is no such type of object wrapping strange value
  const password = user.password;
  const password_confirmation = user.password_confirmation;
  dispatch({ type: "UPDATE_USER_REQUEST" });
  try {
    const response = await axios.put(
      `http://34.210.129.167/api/users/${userId}`,{
      firstName,
      lastName,
      email,
      password,
      password_confirmation
    },
      {
        headers: {
          Authorization: "Bearer" + tokenData,
          "Content-Type": "application/json",
        },
      }
    );
    console.log("response of updateUserAction ", response);
    dispatch({
      type: "UPDATE_USER_REQUEST_SUCCESS",
      payload: response,
    });
  } catch (error) {
    dispatch({ type: "UPDATE_USER_REQUEST_FAILURE", payload: error });
  }
};
export default updateUser;
