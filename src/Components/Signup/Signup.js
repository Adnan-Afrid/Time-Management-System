import { useState } from "react";
import "./Signup.css";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";
import allAction from "../../Redux/Actions";
import { Link } from "react-router-dom";
// import allAction from "../../Redux/Actions";

const Signup = () => {
  const dispatch = useDispatch();
  const history =  useHistory();
  const [user, setUser] = useState({firstName:"", lastName:"", email: "", password: "", password_confirmation:"" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user = ", user);
    dispatch(allAction.signupAction(user));
    history.push('/');
  };
  return (
    <div className="d-md-flex half">
    <div className="background"></div>
    <div className="signup_contents">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <div className="form-block mx-auto">
              <div className="text-center mb-5">
                <h3>Signup</h3>
              </div>
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
                    // id="username"
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
                <p>Have an Account <Link to="/">Login</Link></p>
                  <div className="submit-btn-wrap">
                <button
                  type="submit"
                  className="btn btn-block py-2 btn-primary"
                >
                  Signup
                </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
      );
};
export default Signup;