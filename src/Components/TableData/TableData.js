import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Modal from "react-modal";
import "./TableData.css";
import allAction from "../../Redux/Actions";
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
    color: "#ffff",
  },
};

var userId = 0;
const TableData = () => {
  const dispatch = useDispatch();
  let subtitle;
  const [current_page, setCurrent_page] = useState(1);
  const [modalIsOpen, setIsOpen] = useState(false);
  const allUsers = useSelector((state) => state.getAllUserReducer);
  const userData = useSelector((state) => state.loginReducer);
  const userToken = userData.user.data.token;
  const usersData = allUsers?.users;

  const [user, setUser] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    password_confirmation: "",
  });

  useEffect(()=>{
    dispatch(allAction.getAllUserAction(userData.user.data.token, current_page));
    // eslint-disable-next-line
  },[current_page])

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(allAction.updateUserAction(user, userToken, userId));
    setUser({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      password_confirmation: "",
    });
  };
  const deleteUser = (id) => {
    dispatch(allAction.deleteUser(id, userToken));
  };

  const openModal = (item) => {
    setIsOpen(true);
    userId = item;
    console.log("userId in openModal = ", userId);
  };
  const afterOpenModal = () => {
    subtitle.style.color = "#f00";
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <table className="table table-striped table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">FirstName</th>
            <th scope="col">LastName</th>
            <th scope="col">Email</th>
            <th scope="col">Working Hours</th>
            <th scope="col">Edit User</th>
            <th scope="col">Delete User</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{item.id}</th>
                <td>{item.firstName}</td>
                <td>{item.lastName}</td>
                <td>{item.email}</td>
                <td>{item.working_hours}</td>
                <td>
                  <button
                    onClick={() => {
                      openModal(item.id);
                    }}
                    className="edit_btn"
                  >
                    Edit
                  </button>
                  <Modal
                    isOpen={modalIsOpen}
                    ariaHideApp={false}
                    onAfterOpen={afterOpenModal}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                  >
                    <h2 ref={(_subtitle) => (subtitle = _subtitle)}>
                      Update User Data Form
                    </h2>
                    <button
                      onClick={closeModal}
                      type="button"
                      className="cross_btn"
                    >
                      X
                    </button>
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
                      <div className="submit-btn-wrap">
                        <button
                          type="submit"
                          className="btn btn-block py-2 btn-primary"
                        >
                          Update
                        </button>
                      </div>
                    </form>
                  </Modal>
                </td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(item.id);
                    }}
                    className="del_btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="pags_btns_wrap">
        <button type="button" onClick={()=>{ setCurrent_page(current_page - 1) }}>Prev.</button>
        <button type="button" onClick={()=>{ setCurrent_page(current_page + 1) }}>Next</button>
      </div>
    </>
  );
};

export default TableData;