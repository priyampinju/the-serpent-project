import React from "react";
import Twitter from "../images/HelloIMG1710932369412.svg";
import Logo from "../images/HelloIMG1710932368535.svg";
import Discord from "../images/HelloIMG1710932369870.svg";
import Banner from "./Banner";

const Header = () => {
  return (
    <div className="header pr-[15px] pl-[15px]">
      <div className="header1">
        <div className="navbar flex items-center justify-center w-[1110px] mr-auto ml-auto pt-[22px] pb-[22px]">
          <img src={Logo} className="h-[98px]" />
          <div className=" flex items-center ">
            <ul className="flex justify-center items-center header-buttons text-[17px] font-DM">
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
    </div>
  );
};

export default Header;
