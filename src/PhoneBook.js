import { useState } from "react";

const PhoneBook = (props) => {
  let data = {
    firstName: "Test",
    lastName: "User",
    mobile: "22222222",
  };
  const [list, setList] = useState(data);
  const inputChangeHandler = (e) => {
    setList({ ...list, [e.target.name]: e.target.value });
  };
  const submitHandler =(e)=>{
    e.preventDefault();
    props.addUser(list);
    setList(data);
  }
  return (
    <form onSubmit={submitHandler} className="formData">
      <div className="inputDet">
        <label htmlFor="firstName">Enter First Name:</label>
      <input
        type="text"
        value={list.firstName}
        name="firstName"
        id="firstName"
        onChange={inputChangeHandler}
      />
      </div>
      <div className="inputDet">
        <label htmlFor="lastName">Enter Last Name:</label>
      <input
        type="text"
        value={list.lastName}
        name="lastName"
        id="lastName"
        onChange={inputChangeHandler}
      />
    </div>
    <div className="inputDet">
      <label htmlFor="mobile">Mobile:</label>
      <input
        type="text"
        value={list.mobile}
        name="mobile"
        id="mobile"
        onChange={inputChangeHandler}
      />
      </div>
    <div className="inputDet">
      <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default PhoneBook;
