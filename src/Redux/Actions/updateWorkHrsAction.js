import axios from "axios";

const UpdateWorkHrs = (hrs, userId, userToken) => async (dispatch) => {
    console.log("hours in updateWorkHrsAction =",hrs)
    console.log("userId in updateWorkHrsAction =",userId)
    console.log("userToken in updateWorkHrsAction = ", userToken)
  dispatch({ type: "UPDATE_WORKING_HOURS_REQUEST" });
  try {
    const response = await axios.patch(`http://34.210.129.167/api/users/${userId}/preferred-working-hours`,{ 
    workingHours:hrs
    }, 
    {
      headers: {
        Authorization: "Bearer" + userToken,
        "Content-Type": "application/json",
      },
    });
    console.log("response of updateLogAction ", response);
    dispatch({
      type: "UPDATE_WORKING_HOURS_REQUEST_SUCCESS",
      payload: response,
    });
  } catch (error) {
    dispatch({ type: "UPDATE_WORKING_HOURS_REQUEST_FAILURE", payload: error });
  }
};
export default UpdateWorkHrs;
