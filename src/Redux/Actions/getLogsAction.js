import axios from "axios";

const getLogs = (userToken, userId) => async (dispatch) => {
  console.log("userId in getLogsAction= ", userId);
  dispatch({ type: "GET_LOGS_REQUEST" });
  try {
    const response = await axios.get(
      `http://34.210.129.167/api/user/` + userId + `/work-logs`,
      {
        headers: {
          Authorization: "Bearer" + userToken,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({
      type: "GET_LOGS_REQUEST_SUCCESS",
      payload: response.data.workLogs.data,
    });
  } catch (error) {
    dispatch({ type: "GET_LOGS_REQUEST_FAILURE", payload: error });
  }
};
export default getLogs;
