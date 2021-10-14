import axios from "axios";

const updateLog = (log, logId, tokenData, userId) => async (dispatch) => {
    console.log("log in updateLog =",log)
    console.log("token in updateLog =",tokenData)
    console.log("logId in updateLog = ", logId)
    const logDate = log.logDate;
    const hours = log.hours;
    const description = log.description;
    
    console.log("logDate in updateLog =",logDate)
    console.log("hours in updateLog =",hours)
    console.log("desctiption in updateLog = ", description)
  dispatch({ type: "UPDATE_LOG_REQUEST" });
  try {
    const response = await axios.put(`http://34.210.129.167/api/user/${userId}/work-logs/${logId}`,{
    logDate,
    hours,
    description
  }
  , {
    headers: {
      Authorization: "Bearer" + tokenData,
      "Content-Type": "application/json",
    },
  });
    console.log("response of updateLogAction ", response);
    dispatch({
      type: "UPDATE_LOG_REQUEST_SUCCESS",
      payload: response,
    });
  } catch (error) {
    dispatch({ type: "UPDATE_LOG_REQUEST_FAILURE", payload: error });
  }
};
export default updateLog;
