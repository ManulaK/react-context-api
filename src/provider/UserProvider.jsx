import { UserContext } from "../context/UserContext";
import { useState } from "react";

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([
    {
      userId: 1,
      userName: "John Doe",
      age: "56",
      phoneNumber: "+94345F67890",
    },
    {
      userId: 2,
      userName: "Jane mite",
      age: "32",
      phoneNumber: "+94374567890",
    },
    {
      userId: 3,
      userName: "John Smith",
      age: "45",
      phoneNumber: "+94374567890",
    },
    {
      userId: 4,
      userName: "Jane Smith",
      age: "23",
      phoneNumber: "+94374567890",
    },
    {
      userId: 5,
      userName: "John Doe",
      age: "56",
      phoneNumber: "+94374567890",
    },
    {
      userId: 6,
      userName: "Jane mite",
      age: "32",
      phoneNumber: "+94374567890",
    },
    {
      userId: 7,
      userName: "John Smith",
      age: "45",
      phoneNumber: "+94374567890",
    },
    {
      userId: 8,
      userName: "Jane Smith",
      age: "23",
      phoneNumber: "+94374567890",
    },
    {
      userId: 9,
      userName: "John Doe",
      age: "56",
      phoneNumber: "+94374567890",
    },
    {
      userId: 10,
      userName: "Jane mite",
      age: "32",
      phoneNumber: "+94374567890",
    },
  ]);

  const addUser = (newUser) => {
    setUser([...user, newUser]);
  };

  const updateUser = (updatedUser) => {
    const updatedUsers = user.map((user) =>
      user.userId === updatedUser.userId ? updatedUser : user
    );
    setUser(updatedUsers);
  };

  const deleteUser = (userId) => {
    const updatedUsers = user.filter((userData) => userData.userId !== userId);
    setUser(updatedUsers);
  };

  return (
    <UserContext.Provider value={{ user, addUser, updateUser, deleteUser }}>
      {children}
    </UserContext.Provider>
  );
};
