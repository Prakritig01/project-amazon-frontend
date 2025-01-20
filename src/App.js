import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import UserProfile from "./pages/userProfile";
import store from "./store";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./components/Login/Login";
import { useEffect } from "react";



function App() {
  const user = useSelector((state) => state.auth.curentUser);
  // useEffect({

  // } , [user]);
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/profile" element={<UserProfile />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
