import { UserProvider } from "./provider/UserProvider";
import UserPage from "./Pages/User/User";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddUser from "./Pages/User/AddUser";
import Home from "./Pages/Home/Home";
export default function App() {
  return (
    <UserProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<UserPage />} />
          <Route path='/addUser' element={<AddUser />} />
        </Routes>
      </BrowserRouter>
    </UserProvider>
  );
}
