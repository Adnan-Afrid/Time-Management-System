import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import allAction from '../../Redux/Actions';
import './CreateLogs.css'


const CreateLogs = () => {
  const dipatch = useDispatch();
const [log, setLog] = useState({logDate:"", hours:"", description:""})
const userData = useSelector((state) => state.loginReducer);
  const userToken = userData?.user?.data?.token;
const handleChange = (e) =>{
    const {name, value} = e.target;
    setLog({...log, [name]: value});
}
const handleSubmit = (e) =>{
    e.preventDefault();
    dipatch(allAction.createLogsAction(log, userToken))
    setLog({logDate:"", hours:"", description:""});
}
    return ( 
          <div className="container">
              <div className="row">
                  <div className="col-lg-6">
                      <form onSubmit={handleSubmit}>
                          <div className="form-group first">
                    <label>Log Date</label>
                    <input
                    type="date"
                       name="logDate"
                        value={log.logDate}
                        placeholder="abc@gmail.com"
                       className="form-control"
                        onChange={handleChange}
                    />
                  </div>
                  <div className="form-group last mb-3">
                    <label>Hours</label>
                    <input
                      type="number"
                      name="hours"
                       value={log.hours}
                      onChange={handleChange}
                      className="form-control"
                      placeholder="Your hours"     
                    />
                  </div>
                  <div className="form-group last mb-3">
                    <label>Description</label>
                    <textarea
                      type="text"
                      name="description"
                       value={log.description}
                       onChange={handleChange}
                      className="form-control"
                      placeholder="Your Description"     
                    />
                  </div>
                  <button type="submit">Submit</button>
                      </form>
                  </div>
              </div>
          </div>
     );
}
 
export default CreateLogs;