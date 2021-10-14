import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import allAction from "../../Redux/Actions";

const UpdateWorkHrs = () => {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.loginReducer);
  const userToken = userData?.user?.data?.token;
  const userId = userData?.user?.data?.user?.id;

  const [workingHours, setWorkingHours] = useState("");
  
  const handleChange = (e) => {
    setWorkingHours(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("hours = ", workingHours);
    dispatch(allAction.updateWorkHrsAction(workingHours, userId, userToken));
  };
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group last mb-3">
              <label>Enter Prefered Working Hour's</label>
              <input
                type="number"
                onChange={handleChange}
                className="form-control"
              />
            </div>
            <div className="submit-btn-wrap">
              <button type="submit" className="btn btn-block py-2 btn-primary">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateWorkHrs;
