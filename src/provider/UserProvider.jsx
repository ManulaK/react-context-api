import { UserContext } from "../context/UserContext";
import { useState } from "react";
//description, rental price, and availability
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState([
    {
      userId: 1,
      userName: "John Doe",
      description: "test description",
      rentalPrice: "100",
      availability: "yes",
    },
    {
      userId: 2,
      userName: "Jane mite",
      description: "test description",
      rentalPrice: "100",
      availability: "yes",
    },
    {
      userId: 3,
      userName: "John Smith",
      description: "test description",
      rentalPrice: "100",
      availability: "yes",
    },
    {
      userId: 4,
      userName: "Jane Smith",
      description: "test description",
      rentalPrice: "100",
      availability: "yes",
    },
    {
      userId: 5,
      userName: "John Doe",
      description: "test description",
      rentalPrice: "100",
      availability: "yes",
    },
    {
      userId: 6,
      userName: "Jane mite",
      description: "test description",
      rentalPrice: "100",
      availability: "yes",
    },
    {
      userId: 7,
      userName: "John Smith",
      description: "test description",
      rentalPrice: "100",
      availability: "yes",
    },
    {
      userId: 8,
      userName: "Jane Smith",
      description: "test description",
      rentalPrice: "100",
      availability: "yes",
    },
    {
      userId: 9,
      userName: "John Doe",
      description: "test description",
      rentalPrice: "100",
      availability: "yes",
    },
    {
      userId: 10,
      userName: "Jane mite",
      description: "test description",
      rentalPrice: "100",
      availability: "yes",
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
