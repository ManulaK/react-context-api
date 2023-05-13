import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

export default function AddUser() {
  let { addUser } = useContext(UserContext);

  const [userId, setUserId] = useState("");
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [availability, setAvailability] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let user = {
      userId: userId,
      userName: userName,
      description: description,
      rentalPrice: rentalPrice,
      availability: availability,
    };
    addUser(user);
    setUserId("");
    setUserName("");
    setDescription("");
    setRentalPrice("");
    setAvailability("");
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
        <label htmlFor='description'>Description</label>
        <div>
          <input onChange={(e) => setDescription(e.target.value)} type='text' id='description' />
        </div>
        <label htmlFor='rentalPrice'>Rental Price</label>
        <div>
          <input onChange={(e) => setRentalPrice(e.target.value)} type='text' id='rentalPrice' />
        </div>
        <label htmlFor='availability'>Availability</label>
        <div>
          <input onChange={(e) => setAvailability(e.target.value)} type='text' id='availability' />
        </div>
        <div>
          <button type='submit'>Add</button>
        </div>
      </form>
    </div>
  );
}
