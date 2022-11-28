import React from "react";
import Img from "../assets/ContactImg.png";
import InputHolder from "./InputHolder";

const Contact = () => {
  return (
    // Main Container
    <div className="flex justify-center items-center lg:mt-[100px] mt-[10%] 2xl:mt-[150px] ">
      {/* Contact Form Container */}
      <div className="flex bg-[#F2EEEB] rounded-2xl lg:rounded-3xl w-[500px] lg:w-[800px] xl:w-[1000px]  2xl:w-[1200px] xl:h-[400px] lg:h-[350px] 2xl:h-[500px] justify-center items-center z-10">
        {/* Contact Form */}
        <div className=" flex-grow">
          <div className="mt-8 lg:mt-none lg:w-[450px]  xl:w-[600px] 2xl:w-auto flex flex-col justify-center items-center lg:ml-[30px] xl:ml-[45px] 2xl:ml-auto">
            {/* Title & Description */}
            <div>
              <p className="text-2xl lg:text-2xl 2xl:text-[40px] font-semibold  mb-[18px] lg:w-auto text-center xl:mb-[15px] lg:mb-[10px] 2xl:mb-[23px]">
                Lets get you a Table Booked!
              </p>
              <p className="text-lg lg:text-base w-[450px] lg:w-auto xl:text-lg 2xl:w-[650px] text-center 2xl:text-xl">
                Praesent vitae feugiat nisi, vel mollis enim. Curabitur suscipit
                nisl ac pharetra varius. Morbi porta egestas neque non
                consequat.
              </p>
            </div>

            {/* Form Body */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-[46px] gap-y-[18px] 2xl:mt-11 xl:mt-10 mt-7 lg:mt-7">
              <InputHolder title="Full Name" />
              <InputHolder title="Email Address" />
              <InputHolder title="Phone Number" />
              <button className="2xl:w-[300px] 2xl:h-[50px] bg-seconday mt-[5%] lg:mt-[9.2%] border-none text-primary 2xl:text-primary font-bold lg:text-base lg:rounded-lg w-[300px] h-[35px] rounded-md lg:w-auto lg:h-auto mb-7 lg:mb-0">
                Register Now
              </button>
            </div>
          </div>
        </div>

        {/* Image */}
        <div className="hidden lg:block">
          <img
            src={Img}
            className=" 2xl:h-auto lg:h-[300px] lg:mr-6 xl:h-[350px] lg: xl:mr-[25px]"
          />
        </div>
      </div>
    </div>
  );
};

export default Contact;
