import { EquipmentContext } from "../context/EquipmentContext";
import { useState } from "react";

export const EquipmentProvider = ({ children }) => {
  const [equipment, setEquipment] = useState([
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

  const addEquipment = (newEquipment) => {
    setEquipment([...equipment, newEquipment]);
  };

  const updateEquipment = (updatedEquipment) => {
    const updatedEquipments = equipment.map((equipment) =>
      equipment.userId === updatedEquipment.userId ? updatedEquipment : equipment
    );
    setEquipment(updatedEquipments);
  };

  const deleteEquipment = (userId) => {
    const updatedEquipments = equipment.filter((userData) => userData.userId !== userId);
    setEquipment(updatedEquipments);
  };

  return (
    <EquipmentContext.Provider
      value={{ equipment, addEquipment, updateEquipment, deleteEquipment }}>
      {children}
    </EquipmentContext.Provider>
  );
};
