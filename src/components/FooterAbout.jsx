import React from "react";

const FooterAbout = () => {
  return (
    <div>
      <p className="text-2xl lg:text-2xl xl:text-3xl 2xl:text-[32px] font-semibold text-primary text-center lg:text-left">
        About
      </p>
      <ul className="flex flex-col items-center lg:items-start gap-[8px] mt-6 md:mt-8 lg:mt-[30px]">
        <li className=" text-primary">
          <a className="text-lg xl:text-lg" href="#" target={"_blank"}>
            About Us
          </a>
        </li>
        <li className=" text-primary ">
          <a className="text-lg xl:text-lg" href="#" target={"_blank"}>
            How It B
          </a>
          egan
        </li>
        <li className=" text-primary ">
          <a className="text-lg xl:text-lg" href="#" target={"_blank"}>
            Team
          </a>
        </li>
        <li className=" text-primary ">
          <a className="text-lg xl:text-lg " href="#" target={"_blank"}>
            Careers
          </a>
        </li>
      </ul>
    </div>
  );
};

export default FooterAbout;
