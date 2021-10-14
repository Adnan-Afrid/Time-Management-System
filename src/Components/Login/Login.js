import { useState } from "react";
import "./Login.css";
import { useDispatch, useSelector } from "react-redux";
import allAction from "../../Redux/Actions";
import { Link } from "react-router-dom";
import { useHistory } from "react-router";

const Login = () => {
  const dispatch = useDispatch();
  const history = useHistory(); 
  const [user, setUser] = useState({ email: "", password: "" });
  
  const data = useSelector((state) => state.loginReducer )
  console.log("data = ", data.user)

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("user = ", user);
    dispatch(allAction.loginAction(user)); 
      setTimeout(() => {
        history.push('/dashoboard')
  }, 2000);
  };
  return (
    <div className="d-md-flex half">
      <div className="bg"></div>
      <div className="contents">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <div className="form-block mx-auto">
                <div className="text-center mb-5">
                  <h3>Login</h3>
                </div>
                <form onSubmit={handleSubmit}>
                  <div className="form-group first">
                    <label>Username</label>
                    <input
                       name="email"
                       value={user.email}
                       placeholder="abc@gmail.com"
                       className="form-control"
                       onChange={handleChange}
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
                    />
                  </div>
                  <p>New ? Create Account here <Link to="/signup">Signup</Link></p>
                    <div className="submit-btn-wrap">
                  <button
                    type="submit"
                    className="btn btn-block py-2 btn-primary"
                  >
                    Login
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
export default Login;
