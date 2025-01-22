import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCurrentUser } from "../slices/authSlice";
import { useNavigate } from "react-router-dom";

const UserProfile = () => {
  const navigate = useNavigate();
  const currentUser = useSelector((state) => state.auth.currentUser);
  const dispatch = useDispatch();

  const handleLogout = () => {
    // Remove tokens from localStorage
    localStorage.removeItem("token");
    localStorage.removeItem("refreshToken");

    // Dispatch action to clear the Redux state
    dispatch(removeCurrentUser());

    // Navigate the user to the login page
    navigate("/login");
  };

  const handleLogin = () => {
    // Navigate the user to the login page
    navigate("/login");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-sm w-full text-center">
        {currentUser ? (
          <>
            <h1 className="text-2xl font-bold text-gray-800">
              Welcome, {currentUser.username}!
            </h1>
            <p className="text-gray-600 mt-2">
              Manage your profile and explore the app.
            </p>
            <button
              onClick={handleLogout}
              className="mt-6 px-6 py-2 bg-red-500 text-white rounded-lg shadow hover:bg-red-600 transition duration-300"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <h1 className="text-2xl font-bold text-gray-800">Welcome!</h1>
            <p className="text-gray-600 mt-2">
              Please log in to manage your profile and explore the app.
            </p>
            <button
              onClick={handleLogin}
              className="mt-6 px-6 py-2 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition duration-300"
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default UserProfile;
