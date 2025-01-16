import React from "react";
import HeaderLeft from "./HeaderLeft";
import HeaderMid from "./HeaderMid";
import HeaderRight from "./HeaderRight";

const Header = () => {
  return (
    <div className="bg-[#131921] p-3 flex flex-row space-x-3 h-[1%]">
      <HeaderLeft/>
      <HeaderMid/>
      <HeaderRight/>
    </div>
  );
};

export default Header;
