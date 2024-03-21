import React from "react";
import Twitter from "../images/HelloIMG1710932369412.svg";
import Logo from "../images/HelloIMG1710932368535.svg";
import Discord from "../images/HelloIMG1710932369870.svg";
import Banner from "./Banner";

const Header = () => {
  return (
    <div className=" pr-[15px] pl-[15px]">
      <div className="navbar flex justify-between items-center w-[1110px] mr-auto ml-auto pt-[22px] pb-[22px]">
        <img src={Logo} className="h-[98px]" />
        <div className="w-[824px] pr-[30px] pl-[18px]">
          <ul className="flex justify-center items-center header-buttons text-[17px]">
            <li>Home</li>
            <li>About us</li>
            <li>Donation</li>
            <li>Roadmap</li>
            <li>Team</li>
            <li>FAQ</li>
            <li>Trees</li>
          </ul>
        </div>
        <div
          className="flex
           justify-between w-[125px] items-center"
        >
          <img src={Twitter} className="h-[35px]" />
          <img src={Discord} className="h-[60px]" />
        </div>
      </div>
      <Banner />
    </div>
  );
};

export default Header;
