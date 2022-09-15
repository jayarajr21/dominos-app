import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import AdminPage from "./pages/AdminPage";
import HistoryPage from "./pages/HistoryPage";
import AdminNavbar from "./components/AdminNavbar";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import { UserContext } from "./context/UserContext";
import { useContext } from "react";
import Dish from "./pages/DishPage";

const App = () => {
  const { loggedInUser }=useContext(UserContext);
  console.log(loggedInUser)
  return (
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/Login" element={<LoginPage />} />
        <Route path="/Register" element={<RegisterPage />} />

        <Route element = {<ProtectedRoutes auth={loggedInUser.isLoggedIn}/>} />
        
        <Route path="/Cart" element={<CartPage />} />
        <Route path="/Admin" element={<AdminPage />} />
        <Route path="/History" element={<HistoryPage />} />
        <Route path="/adminnavbar" element={<AdminNavbar />} />
        <Route path="/Dish" element={<Dish />}/>

      
        
      </Routes>
  );
}

export default App;
