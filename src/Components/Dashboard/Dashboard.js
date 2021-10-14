import { useState } from "react";
import "./Dashboard.css";
import { useHistory } from "react-router";
import CreateLogs from "../CreateLogs/CreateLogs";
import TableData from "../TableData/TableData";
import { useDispatch, useSelector } from "react-redux";
import allAction from "../../Redux/Actions";
import ShowLogs from "../ShowLogs/ShowLogs";
import Avatar from "react-avatar";
import UserSignup from "../UserSignup/UserSignup";
import UpdateWorkHrs from "../UpdateWorkHrs/UpdateWorkHrs";

const Dashboard = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  
  const [check, setCheck] = useState(false);
  const [check2, setCheck2] = useState(false);
  const [check3, setCheck3] = useState(false);

  const userData = useSelector((state) => state.loginReducer);
  const userToken = userData.user.data.token;
  const userId = userData.user.data.user.id;
 
  const logout = () => {
    localStorage.clear();
    history.push("/");
  };
  const getAllUserState = () => {
    setCheck3(true);
    setCheck(false);
    setCheck2(false);
  };
  const getLogs = () => {
    dispatch(allAction.getLogsAction(userToken, userId));
    setCheck3(true);
    setCheck(false);
    setCheck2(false);
  };
  const createLogs = () => {
    setCheck(true);
    setCheck3(false);
    setCheck2(false);
  };
  const workhours = () =>{
    setCheck(false);
    setCheck2(true);
    setCheck3(false);
  }
  return (
    <div className="dashboard_wrap">
      <div className="container-fluid">
        <div className="row">
          {userData.user.data.user.roles[0].name === "user" ? (
            <>
              <div className="col-lg-3">
                <div className="dash_contents">
                  <Avatar
                    name={userData.user.data.user.email}
                    size="100"
                    round={true}
                  />
                  <p>{userData.user.data.user.email}</p>
                  <hr />
                  <ul>
                    <li>
                      <button onClick={createLogs}>Create log</button>
                    </li>
                    <li>
                      <button onClick={getLogs}>Show logs</button>
                    </li>
                    <li>
                      <button onClick={workhours}>Update hr's</button>
                    </li>
                    <li>
                      <button onClick={logout} className="logout_btn">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <h2>
                  Welcome User{" "}
                  <strong>
                    {userData.user.data.user.firstName}{" "}
                    {userData.user.data.user.lastName}
                  </strong>{" "}
                  to Your Worklogs
                </h2>
                <hr />
                {check ? <CreateLogs /> : null}
                {check2 ? <UpdateWorkHrs/> : null}
                {check3 ? <ShowLogs /> : null}
              </div>
            </>
          ) : (
            ""
          )}
          {userData.user.data.user.roles[0].name === "manager" ? (
            <>
              <div className="col-lg-3">
                <div className="dash_contents">
                  <Avatar
                    name={userData.user.data.user.email}
                    size="100"
                    round={true}
                  />
                  <p>
                    {userData.user.data.user.firstName}{" "}
                    {userData.user.data.user.lastName}
                  </p>
                  <hr />
                  <ul>
                    <li>
                      <button onClick={createLogs}>Create User</button>
                    </li>
                    <li>
                      <button onClick={getAllUserState}>Get Users</button>
                    </li>
                    <li>
                      <button onClick={logout} className="logout_btn">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <h2>
                  Welcome Manager{" "}
                  <strong>
                    {userData.user.data.user.firstName}{" "}
                    {userData.user.data.user.lastName}
                  </strong>{" "}
                  to Your Dashboard
                </h2>
                <hr />
                {check ? <UserSignup /> : null}
                {check3 ? <TableData /> : null}
              </div>
            </>
          ) : (
            ""
          )}
          {userData.user.data.user.roles[0].name === "admin" ? (
            <>
              <div className="col-lg-3">
                <div className="dash_contents">
                  <Avatar
                    name={userData.user.data.user.email}
                    size="100"
                    round={true}
                  />
                  <p>
                    {userData.user.data.user.firstName}{" "}
                    {userData.user.data.user.lastName}
                  </p>
                  <hr />
                  <ul>
                    <li>
                      <button onClick={createLogs}>Create User</button>
                    </li>
                    <li>
                      <button onClick={getAllUserState}>Show Users</button>
                    </li>
                    <li>
                      <button onClick={logout} className="logout_btn">
                        Logout
                      </button>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-9">
                <h2>
                  Welcome{" "}
                  <strong>
                    {userData.user.data.user.firstName}{" "}
                    {userData.user.data.user.lastName}
                  </strong>{" "}
                  to Your Dashboard
                </h2>
                <hr />
                {check ? <UserSignup/> : null}
                {check3 ? <TableData /> : null}
              </div>
            </>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
