import React from "react";
import amazonLogo from "./../../assets/amazon_logo.png";
const HeaderLeft = () => {
  return (
    <div className="flex flex-row font-roboto">
      <div className="amazon-logo flex items-center">
        <img src={amazonLogo} alt="Amazon Logo" className="h-10" />
      </div>

      <div className="address text-white flex flex-row text-xs">
        <i class="fi fi-rs-marker"></i>
        <div>
          <p>Deliver to Prakriti</p>
          <p>Moradabad 244001</p>
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
