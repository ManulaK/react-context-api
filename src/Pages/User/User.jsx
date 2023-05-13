import { useContext, useState } from "react";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";
import EditUserForm from "./EditUser";

export default function User() {
  const { user, deleteUser } = useContext(UserContext);
  const [editUserId, setEditUserId] = useState(null);

  const handleEdit = (userId) => {
    setEditUserId(userId);
  };

  const handleEditClose = () => {
    setEditUserId(null);
  };

  const handleDelete = (userId) => {
    deleteUser(userId);
  };

  return (
    <div>
      <Link to='/addUser'>Add Customer</Link>

      <table className='user-table'>
        <thead>
          <tr>
            <th>Id</th>
            <th>UserName</th>
            <th>Description</th>
            <th>Rental Price</th>
            <th>Availability</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {user.map((userData) => (
            <tr key={userData.userId}>
              <td>{userData.userId}</td>
              <td>{userData.userName}</td>
              <td>{userData.description}</td>
              <td>{userData.rentalPrice}</td>
              <td>{userData.availability}</td>
              <td>
                <div className='user-button'>
                  <button className='user-button-edit' onClick={() => handleEdit(userData.userId)}>
                    Edit
                  </button>
                  <button
                    className='user-button-delete'
                    onClick={() => handleDelete(userData.userId)}>
                    Delete
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {editUserId && <EditUserForm userId={editUserId} onClose={handleEditClose} />}
      <Link to='/'>Back</Link>
    </div>
  );
}
