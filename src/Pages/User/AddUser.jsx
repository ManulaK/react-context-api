import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

export default function AddUser() {
  let { addUser } = useContext(UserContext);

  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      userId: userId,
      userName: userName,
      age: age,
      phoneNumber: phoneNumber,
    };
    addUser(user);
    setUserId("");
    setUserName("");
    setAge("");
    alert("User added");
  };

  return (
    <div>
      <div>
        <Link to='/'>Back</Link>
      </div>
      <h1>Add User</h1>
      <form className='add-user-class' onSubmit={handleSubmit}>
        <label htmlFor='userId'>Id</label>
        <div>
          <input type='text' onChange={(e) => setUserId(e.target.value)} id='userId' />
        </div>
        <label htmlFor='userName'>UserName</label>
        <div>
          <input type='text' id='userName' onChange={(e) => setUserName(e.target.value)} />
        </div>
        <label htmlFor='age'>Age</label>
        <div>
          <input onChange={(e) => setAge(e.target.value)} type='text' id='age' />
        </div>
        <label htmlFor='phoneNumber'>Phone Number</label>
        <div>
          <input onChange={(e) => setPhoneNumber(e.target.value)} type='text' id='phoneNumber' />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
}
