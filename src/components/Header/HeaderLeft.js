import React from "react";
import amazonLogo from "./../../assets/amazon_logo.png";
import { useNavigate } from "react-router-dom";
const HeaderLeft = () => {
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
          <p className="text-gray-400 font-semibold">Deliver to Prakriti</p>
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
