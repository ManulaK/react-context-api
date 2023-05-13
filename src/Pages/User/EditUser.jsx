import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

export default function EditUserForm({ userId, onClose }) {
  const { user, updateUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [description, setDescription] = useState("");
  const [rentalPrice, setRentalPrice] = useState("");
  const [availability, setAvailability] = useState("");

  useEffect(() => {
    // Fetch the user data based on the userId and populate the form fields
    const selectedUser = user.find((userData) => userData.userId === userId);
    if (selectedUser) {
      setUserName(selectedUser.userName);
      setDescription(selectedUser.description);
      setRentalPrice(selectedUser.rentalPrice);
      setAvailability(selectedUser.availability);
    }
  }, [userId, user]);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleDescriptionChange = (event) => {
    setDescription(event.target.value);
  };

  const handleRentalPriceChange = (event) => {
    setRentalPrice(event.target.value);
  };

  const handleAvailabilityChange = (event) => {
    setAvailability(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the user data with the edited values
    const updatedUser = {
      userId,
      userName,
      description,
      rentalPrice,
      availability,
    };
    updateUser(updatedUser);

    // Close the edit form
    onClose();
  };

  return (
    <div>
      <h2>Edit User</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor='userName'>Username:</label>
          <input type='text' id='userName' value={userName} onChange={handleUserNameChange} />
        </div>
        <div>
          <label htmlFor='description'>Description:</label>
          <input
            type='text'
            id='description'
            value={description}
            onChange={handleDescriptionChange}
          />
        </div>
        <div>
          <label htmlFor='rentalPrice'>Rental Price:</label>
          <input
            type='text'
            id='rentalPrice'
            value={rentalPrice}
            onChange={handleRentalPriceChange}
          />
        </div>
        <div>
          <label htmlFor='availability'>Availability:</label>
          <input
            type='text'
            id='availability'
            value={availability}
            onChange={handleAvailabilityChange}
          />
        </div>
        <div>
          <button type='submit'>Save</button>
          <button type='button' onClick={onClose}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
