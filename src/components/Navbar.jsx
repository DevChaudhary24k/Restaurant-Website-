import React from "react";

const navbar = () => {
  return (
    <div className="h-16  flex items-center justify-center w-screen xl:lg:h-[100px] border-b-[1px] border-divider">
      <div className="flex items-center justify-between w-5/6 ">
        {/* Left Side */}
        <div>
          <p className="text-lg sm:text-xl lg:text-2xl font-semibold">
            Lorem Ipsum
          </p>
        </div>

        {/* Middle */}
        <div className=" hidden xl:block">
          <ul className="flex flex-row gap-12  ">
            <li className=" text-xl text-seconday font-medium">Home</li>
            <li className=" text-xl text-seconday font-medium">About</li>
            <li className=" text-xl text-seconday font-medium">Menu</li>
            <li className=" text-xl text-seconday font-medium">Award</li>
            <li className=" text-xl text-seconday font-medium">contact</li>
          </ul>
        </div>

        {/* Right Side */}
        <button className="text-lg sm:text-base md:text-lg lg:text-xl text-white font-medium h-10 w-36 bg-seconday rounded-md">
          Book Table
        </button>
      </div>
      {/* <div className="" /> */}
    </div>
  );
};

export default navbar;
