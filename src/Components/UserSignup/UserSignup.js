import { useState } from "react";
import allAction from "../../Redux/Actions";
import { useDispatch, useSelector } from "react-redux";
import "./UserSignup.css";

const UserSignup = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.loginReducer);
  const userToken = userData?.user?.data?.token;
  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
    userType: "user",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user = ", user);
    dispatch(allAction.UserSignupAction(user, userToken));
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password_confirmation: "",
      userType: "user",
    });
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <h2>User Signup Form</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group first">
              <label>Firstname</label>
              <input
                type="text"
                name="firstName"
                value={user.firstName}
                onChange={handleChange}
                className="form-control"
                placeholder="Chris"
                id="firstname"
              />
            </div>
            <div className="form-group first">
              <label>Lastname</label>
              <input
                type="text"
                name="lastName"
                value={user.lastName}
                onChange={handleChange}
                className="form-control"
                placeholder="Gayle"
                id="lastname"
              />
            </div>
            <div className="form-group first">
              <label>Email</label>
              <input
                type="email"
                name="email"
                value={user.email}
                onChange={handleChange}
                className="form-control"
                placeholder="abc@email.com"
              />
            </div>
            <div className="form-group last mb-3">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={user.password}
                onChange={handleChange}
                className="form-control"
                placeholder="Your Password"
                id="password"
              />
            </div>
            <div className="form-group last mb-3">
              <label>Confirm Password</label>
              <input
                type="password"
                name="password_confirmation"
                value={user.password_confirmation}
                onChange={handleChange}
                className="form-control"
                placeholder="Confirm Password"
                id="confirm_password"
              />
            </div>
            <div className="form-group last mb-3">
                <input type="radio" name="userType" value={"user"} /> {" "}
              <label>User</label>
            </div>
            <div className="submit-btn-wrap">
              <button type="submit" className="btn btn-block py-2 btn-primary">
                Register
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UserSignup;
