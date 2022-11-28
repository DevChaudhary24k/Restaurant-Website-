import React from "react";
import FooterBranding from "./FooterBranding";
import FooterAbout from "./FooterAbout";
import FooterFollowUs from "./FooterFollowUs";

const Footer = () => {
  return (
    <div className="flex justify-center items-center ">
      <div className="bg-seconday w-screen xl:h-auto  2xl:h-[700px] mt-[-150px] md:mt-[-200px] lg:mt-[-7%]">
        <div className="flex flex-col">
          {/* Footer Container */}
          <div className="flex md:flex-row justify-center items-center lg:mt-[150px] mt-[200px] md:mt-[300px] xl:mt-[252px]">
            {/* Description and Links */}
            <div className="flex lg:flex-row flex-col lg:gap-[120px] xl:gap-[230px] 2xl:gap-[370px]">
              {/* Branding */}
              <FooterBranding />
              {/* Social Links */}
              <div className="flex mt-[50px] lg:mt-0 justify-center gap-12 md:gap-[100px] lg:gap-[80px] xl:gap-[104px]">
                {/* About */}
                <FooterAbout />
                {/* Follow Us  */}
                <FooterFollowUs />
              </div>
            </div>
          </div>
          {/* Copyright Section */}
          <div className="flex justify-center items-center lg:mt-[50px] xl:mt-[70px] mt-[80px] 2xl:mt-[100px] md:mb-10 lg:mb-0">
            {/* Copyright Container */}
            <div className="text-primary flex flex-col items-center lg:flex-row 2xl:flex-row gap-5 md:gap-6 lg:gap-[80px] text-lg xl:gap-[290px] 2xl:gap-[400px]">
              <p className="lg:text-base xl:text-lg  2xl:text-xl ">
                Copyright © 2022 Lorem Ipsum. All Rights Reserved.
              </p>
              <div className="flex 2xl:flex-row gap-[63px]">
                <a
                  className="text-lg lg:text-base xl:text-lg 2xl:text-xl"
                  href="#"
                  target={"_blank"}
                >
                  Terms and Conditions
                </a>
                <a
                  className="text-lg lg:text-base xl:text-lg 2xl:text-xl"
                  href="#"
                  target={"_blank"}
                >
                  Privacy Policy
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
