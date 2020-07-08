import React from "react";

const Footer = () => {
  return (
    <footer class="font-sans bg-black text-white pt-8 pb-32 px-4 ">
      <div class="mx-auto container overflow-hidden flex flex-col lg:flex-row justify-between">
        <div className="flex items-start justify-start md:justify-center ">
          {/* <img
              className=" mx-2"
              src={logo}
              alt="logo"
              height=""
              width="40"
            ></img> */}
          <div className="text-white text-3xl font-bold">AshShorts</div>
        </div>
        <div class="w-1/2 flex text-sm mt-6 lg:mt-0 mx-20"></div>
        <div className="flex flex-col ">
          <div className="text-2xl font-bold">Internship Test</div>
          <div className="text-md font-bold">Developed By Ashin Laurel</div>

          <div className="text-sm">Phone:+91 9496249657 </div>
          <div className="text-sm">Email:ashinlaurel9999@gmail.com</div>
        </div>
      </div>
      <div class="pt-4 mt-4 text-gray-700 border-t border-gray-900 text-center">
        ©2020 TurnBox. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
