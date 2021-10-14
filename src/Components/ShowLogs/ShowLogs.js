import { useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import './ShowLogs.css';
import Modal from "react-modal";
import allAction from '../../Redux/Actions';

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    width: "30%",
    background: "#3a3a3a",
    color:"#ffff"
  },
};
var logId = 0;
const ShowLogs = () => {
  const dispatch = useDispatch()
  const [log, setLog] = useState({logDate:"", hours:"", description:""})
  let subtitle;
  const [modalIsOpen, setIsOpen] = useState(false);
    const userLogs = useSelector((state) => state.getLogsReducer)
    const items = userLogs?.logs;
    console.log("items in Show Logs = ", items.id)
    const userData = useSelector((state) => state.loginReducer);
    const userToken = userData?.user?.data?.token;
    const userId = userData?.user?.data?.user?.id;

    console.log("loggedIn statue", userData.loggedIn)
    
    const handleChange = (e) =>{
      const {name, value} = e.target;
      setLog({...log, [name]: value});
  }
  const handleSubmit = (e) =>{
      e.preventDefault();
      console.log("log = ",log)
      console.log("logId in handleSubmit = ", logId)
      dispatch(allAction.updateLogAction(log, logId, userToken, userId));
  }
  const openModal = (itemId, item) => {
    setIsOpen(true);
    logId = itemId;
    console.log("itemId in showLogs = ", itemId)
    console.log("item in showLogs = ", item)
  }
  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  }
  const closeModal = () => {
    setIsOpen(false);
  }
    return ( 
        <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">UserID</th>
            <th scope="col">Log Date</th>
            <th scope="col">Hours</th>
            <th scope="col">Description</th>
            <th scope="col">Edit Log</th>
          </tr>
        </thead>
        <tbody>
          {items?.map((item, index)=>{
              return(
                <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.user_id}</td>
                <td>{item.log_date}</td>
                <td>{item.hours}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => {openModal(item.id)}} className="edit_btn">Edit</button>
                  <Modal
                  isOpen={modalIsOpen}
                  ariaHideApp={false}
                  onAfterOpen={afterOpenModal}
                  onRequestClose={closeModal}
                  style={customStyles}
                  contentLabel="Example Modal"
                >
                  <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Update User Data Form</h2>
                  <button
                    onClick={closeModal}
                    type="button"
                    className="cross_btn"
                  >
                    X
                  </button>
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
                  <button type="submit" className="btn btn-block py-2 btn-primary">Submit</button>
                      </form>
                </Modal>
                </td>
              </tr>
              )
          })}
          </tbody>
              </table>
     );
}
 
export default ShowLogs;