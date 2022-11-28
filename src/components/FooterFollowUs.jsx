import React from "react";
import Linkedin from "../assets/Linkedin.svg";
import Behance from "../assets/behance.svg";
import Dribbble from "../assets/Dribbble.svg";
import Youtube from "../assets/Youtube.svg";
import Facebook from "../assets/Facebook.svg";

const FooterFollowUs = () => {
  return (
    <div>
      <p className="text-2xl lg:text-2xl xl:text-3xl 2xl:text-[32px] font-semibold text-primary">
        Follow Us
      </p>
      <ul className="flex flex-col gap-[8px] mt-6 md:mt-8 lg:mt-[30px] items-center lg:items-start ">
        <li className="lg:text-base flex gap-3 items-center xl:text-lg 2xl:text-xl text-primary text-lg">
          <img src={Linkedin} />
          <p>LinkedIn</p>
        </li>
        <li className="lg:text-base flex gap-3 items-center xl:text-lg 2xl:text-xl text-primary  text-lg">
          <img src={Behance} />
          <p>Behance</p>
        </li>
        <li className="lg:text-base flex gap-3 items-center xl:text-lg 2xl:text-xl text-primary text-lg">
          <img src={Dribbble} />
          <p>Dribbble</p>
        </li>
        <li className="lg:text-base flex gap-3 items-center xl:text-lg 2xl:text-xl text-primary text-lg">
          <img src={Youtube} />
          <p>Youtube</p>
        </li>
        <li className="lg:text-base flex gap-3 items-center xl:text-lg 2xl:text-xl text-primary text-lg">
          <img src={Facebook} />
          <p>Facebook</p>
        </li>
      </ul>
    </div>
  );
};

export default FooterFollowUs;
