import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import AmazonIcon from "./../../assets/amazon_logo.png";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../../slices/authSlice";
import axios from "axios";

const AuthPages = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [error, setError] = useState("");
  const [isLoginView, setIsLoginView] = useState(true);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: "",
    confirmPassword: "",
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("");

    if (isLoginView) {
      // Login API call
      axios
        .post("http://localhost:5001/login", {
          email: formData.email,
          password: formData.password,
        })
        .then((response) => {
          const { token, refresh_token } = response?.data;
          dispatch(
            setCurrentUser({ token, refresh_token, email: formData.email })
          );
          navigate("/profile");
        })
        .catch((err) => {
          const errorMessage =
            err.response?.data?.message || "Something went wrong";
          setError(errorMessage);
        });
    } else {
      // Register API call
      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match!");
        return;
      }

      axios
        .post("http://localhost:5001/register", {
          email: formData.email,
          password: formData.password,
          username: formData.name,
        })
        .then((response) => {
          // Handle successful registration
          dispatch(setCurrentUser({ email: formData.email }));
          navigate("/profile"); // Redirect to login or another page
        })
        .catch((err) => {
          const errorMessage =
            err.response?.data?.message || "Something went wrong";
          setError(errorMessage);
        });
    }
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      {/* Header */}
      <div className="flex space border-b bg-[#121921] border-gray-300 py-3">
        <Link to="/">
          <img src={AmazonIcon} alt="Amazon" className="h-8 mx-auto ml-4" />
        </Link>
      </div>

      {/* Auth Card */}
      <div className="flex-grow flex justify-center px-4">
        <div className="w-full max-w-[350px] my-4">
          <div className="border border-gray-300 rounded-lg p-6 bg-white">
            <h1 className="text-3xl font-normal mb-4">
              {isLoginView ? "Sign-In" : "Create account"}
            </h1>

            <form onSubmit={handleSubmit}>
              {/* Name Field - Only show in Register view */}
              {!isLoginView && (
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-1">
                    Your name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 focus:outline-none"
                    placeholder="First and last name"
                  />
                </div>
              )}

              {/* Email Field */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 focus:outline-none"
                />
              </div>

              {/* Password Field */}
              <div className="mb-4">
                <label className="block text-sm font-bold mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 focus:outline-none"
                  placeholder={isLoginView ? "" : "At least 6 characters"}
                />
                {!isLoginView && (
                  <p className="text-xs text-gray-600 mt-1">
                    Passwords must be at least 6 characters.
                  </p>
                )}
              </div>

              {/* Confirm Password Field - Only show in Register view */}
              {!isLoginView && (
                <div className="mb-4">
                  <label className="block text-sm font-bold mb-1">
                    Re-enter password
                  </label>
                  <input
                    type="password"
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-gray-300 rounded focus:border-yellow-600 focus:ring-1 focus:ring-yellow-600 focus:outline-none"
                  />
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-[#FFD814] hover:bg-[#F7CA00] border border-[#FCD200] rounded-lg py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:ring-offset-2 mt-2"
              >
                {isLoginView ? "Sign-In" : "Create your Amazon account"}
              </button>
            </form>

            {/* Terms and Conditions */}
            <p className="text-xs text-gray-600 mt-4">
              By continuing, you agree to Amazon's{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-orange-700 hover:underline"
              >
                Conditions of Use
              </a>{" "}
              and{" "}
              <a
                href="#"
                className="text-blue-600 hover:text-orange-700 hover:underline"
              >
                Privacy Notice
              </a>
              .
            </p>

            {isLoginView && (
              <div className="mt-4">
                <div className="text-xs text-gray-600">
                  <a href="#" className="hover:text-orange-700 hover:underline">
                    Need help?
                  </a>
                </div>
              </div>
            )}
          </div>

          {/* Divider */}
          <div className="relative mt-8 mb-4">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-2 bg-white text-gray-500">
                {isLoginView ? "New to Amazon?" : "Already have an account?"}
              </span>
            </div>
          </div>

          {/* Toggle Button */}
          <button
            onClick={() => setIsLoginView(!isLoginView)}
            className="w-full bg-gray-100 hover:bg-gray-200 border border-gray-300 rounded-lg py-1 px-2 shadow-sm focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
          >
            {isLoginView ? "Create your Amazon account" : "Sign in"}
          </button>
          {error && (
            <div className="mt-4 text-red-500 text-sm font-medium">{error}</div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthPages;
