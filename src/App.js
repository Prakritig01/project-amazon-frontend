import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import UserProfile from "./pages/userProfile";
import store from "./store";
import { Provider, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login, { Auth } from "./components/Login/Login";
import { useEffect } from "react";
import { selectCurrentUser, setCurrentUser, setLoading } from "./slices/authSlice";
import axios from "axios";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const refreshToken = localStorage.getItem("refreshToken");
    console.log("refreshToken", refreshToken);
    dispatch(setLoading(true));
    axios
      .post("http://localhost:5001/user", { token: refreshToken })
      .then((response) => {
        const { user } = response.data;
        console.log(" in useEffect", user);
        dispatch(setCurrentUser(user));
      })
      .catch((err) => console.error(err))
      .finally(() => {
        dispatch(setLoading(false));
      });
  }, []);

  const user = useSelector(selectCurrentUser);

  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route element={<Auth />}>
            <Route path="/cart" element={<CartPage />} />
            <Route path="/profile" element={<UserProfile />} />
          </Route>
          <Route path="/login" element={<Login />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
