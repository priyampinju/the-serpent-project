import React from "react";
import Venom from "../images/Venom.png";

const Banner = () => {
  return (
    <div className="banner font-Mulish mr-[105px] ml-[105px] pl-[15px]">
      <div className="container ">
        <div className="banner-content max-w-[100%]  ">
          <h1 className="text-[68px] uppercase text-white mb-[40px] font-black leading-banner-content ">
            Welcome to the Nest
          </h1>
          <p className="font-extrabold text-[30px] text-white mb-[40px] font-DM leading-banner-p">
            Subject to shedding as we grow!
          </p>
          <a
            href="#"
            className="general-button font-DM font-bold text-[20px] !text-btn-text bg-btn-bg w-[222px] h-[64px] rounded-[8px] inline-block leading-banner-btn text-center border-0"
          >
            More Info
          </a>
        </div>
        <div className="banner-img absolute bottom--7 w-[593px] right-[10px]">
          {" "}
          {/* bottom 151px*/}
          <img src={Venom} className="h-29 " />
        </div>
      </div>
    </div>
  );
};

export default Banner;
