import React from "react";
import amazonLogo from "./../../assets/amazon_logo.png";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../slices/authSlice";
const HeaderLeft = () => {
  const user = useSelector(selectCurrentUser);
  const userName = user?.name || "Guest"; // Will fallback to "Guest" if user is null or undefined

  console.log("user in header", user);
  const navigate = useNavigate();
  const handleLogoClick = () => {
    navigate("/");
  };
  return (
    <div className="flex flex-row font-roboto items-center gap-3">
      <button
        className="amazon-logo flex items-center "
        onClick={handleLogoClick}
      >
        <img src={amazonLogo} alt="Amazon Logo" className="h-8" />
        <p className="text-white text-sm mb-1">.in</p>
      </button>

      <button className="address text-white flex flex-col text-xs  items-center">
        <div className="flex flex-row items-center">
          <p className="text-gray-400 font-semibold">Deliver to {userName}</p>
        </div>
        <div className="flex flex-row items-center gap-1 font-bold">
          <i class="fi fi-rs-marker "></i>
          <p className="">Moradabad 244001</p>
        </div>
      </button>
    </div>
  );
};

export default HeaderLeft;
