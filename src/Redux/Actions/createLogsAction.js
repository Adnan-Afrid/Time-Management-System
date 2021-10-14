import axios from "axios";

const createLogs = (log, userToken) => async (dispatch) => {
  dispatch({ type: "CREATE_LOG_REQUEST" });
  try {
    const response = await axios.post(
      `http://34.210.129.167/api/work-logs`,
      log,
      {
        headers: {
          Authorization: "Bearer" + userToken,
          "Content-Type": "application/json",
        },
      }
    );
    dispatch({ type: "CREATE_LOG_REQUEST_SUCCESS", payload: response });
  } catch (error) {
    dispatch({ type: "CREATE_LOG_REQUEST_FAILURE", payload: error });
  }
};
export default createLogs;
