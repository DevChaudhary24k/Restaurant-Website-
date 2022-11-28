import React from "react";
import UnderLine from "../assets/AbtUnderline.svg";
import Award from "./Award";
import img1 from "../assets/Award1.png";
import img2 from "../assets/Award2.png";
import img3 from "../assets/Award3.png";
import img4 from "../assets/Award4.png";

const Awards = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[12%] lg:mt-[6.5%]">
      {/* Title */}
      <div className="2xl:max-w-[700px] relative">
        <img src={UnderLine} className="absolute right-[-6%] top-[65%] -z-10" />
        <p className="lg:text-5xl font-semibold text-3xl md:text-4xl">
          Some of Our Achievements
        </p>
      </div>
      {/* Awards Section */}
      <div className="flex flex-col justify-center items-center lg:flex-row lg:gap-14 max-w-[90%] mt-[10%] lg:mt-[3%] gap-8">
        <Award imgURL={img1} />
        <Award imgURL={img2} />
        <Award imgURL={img3} />
        <Award imgURL={img4} />
      </div>
    </div>
  );
};

export default Awards;
