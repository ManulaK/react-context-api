import { UserProvider } from "./provider/UserProvider";
import UserPage from "./Pages/User/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./Pages/User/AddUser";
import Home from "./Pages/Home/Home";
import Equipment from "./Pages/Equipment/Equipment";
export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/addUser' element={<AddUser />} />
          <Route path='/equipment' element={<Equipment />} />
          <Route path='*' element={<h1>Not Found</h1>} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
