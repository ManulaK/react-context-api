import { useContext, useState, useEffect } from "react";
import { UserContext } from "../../context/UserContext";

export default function EditUserForm({ userId, onClose }) {
  const { user, updateUser } = useContext(UserContext);
  const [userName, setUserName] = useState("");
  const [age, setAge] = useState("");

  useEffect(() => {
    // Fetch the user data based on the userId and populate the form fields
    const selectedUser = user.find((userData) => userData.userId === userId);
    if (selectedUser) {
      setUserName(selectedUser.userName);
      setAge(selectedUser.age);
    }
  }, [userId, user]);

  const handleUserNameChange = (event) => {
    setUserName(event.target.value);
  };

  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Update the user data with the edited values
    const updatedUser = {
      userId,
      userName,
      age,
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
          <label htmlFor='age'>Age:</label>
          <input type='text' id='age' value={age} onChange={handleAgeChange} />
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
