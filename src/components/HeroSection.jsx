import React from "react";
import person1 from "../assets/person1.png";
import person2 from "../assets/person2.png";
import person3 from "../assets/person3.png";
import person4 from "../assets/person4.png";
import person5 from "../assets/person5.png";
import HeroImg from "../assets/HeroSectionImg.png";

const HeroSection = () => {
  return (
    <div>
      <div className="flex xl:flex justify-between flex-col lg:flex-row">
        {/* Left Side */}
        <div className="order-2 flex justify-center items-center flex-grow bg-gradient-to-tr from-primary border-b-[1px] border-divider">
          <div className="">
            <p className="max-w-[80%] lg:max-w-none mx-auto mt-8 sm:mt-10 text-3xl text-center lg:text-left lg:text-4xl font-bold xl:text-5xl  2xl:text-6xl  2xl:leading-[78PX]">
              “The Taste You Had <br className="hidden lg:block" /> Never Before
              Lorem”
            </p>
            <p className=" text-lg max-w-[80%] lg:max-w-none mx-auto text-center lg:text-left sm:text-xl  mt-8 sm:mt-10 lg:text-base xl:text-lg 2xl:text-xl font-normal 2xl:leading-8 lg:mt-5 xl:mt-7 2xl:mt-8">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              <br className="hidden lg:block" />
              mattis semper accumsan. Maecenas ornare massa ut felis lobortis
              <br className="hidden lg:block" />
              pretium. Ut tristique nisi tortor, ut commodo sapien tincidunt
              <br className="hidden lg:block" />
              blandit.
            </p>
            <div className="mt-8 sm:mt-10  xl:mt-7 2xl:mt-8 flex gap-4 md:gap-8 md:flex-row lg:mt-5 flex-col justify-center lg:justify-start ">
              <button className="w-80 h-9 mx-auto md:mx-0 md:w-48 md:h-10 md:text-lg lg:text-base lg:w-48 lg:h-9 xl:h-10 2xl:h-12 bg-opacity-0 border-[1px] border-seconday rounded-md text-seconday text-xl">
                Learn More
              </button>
              <button className="w-80 h-9 mx-auto md:mx-0 md:w-48 md:h-10 md:text-lg lg:text-base lg:h-9 xl:h-10 lg:w-48 2xl:h-12 rounded-md bg-seconday text-white text-xl">
                Book a Table
              </button>
            </div>
            <div className="md:justify-center md:mt-10 xl:mt-12 2xl:mt-20 flex items-center 2xl:flex-row lg:gap-10 xl:gap-12 2xl:gap-14 lg:mt-5 md:gap-10 md:flex-row flex-col sm:gap-4 gap-2 mt-8 sm:mt-10 mb-8">
              <div className="flex ">
                <img
                  className="rounded-full xl:border-[5px] border-white xl:mr-[-25px] h-auto xl:w-14  2xl:w-16  lg:w-12  lg:border-[3px] w-12  border-[3px] mr-[-15px]"
                  src={person1}
                  alt=""
                />
                <img
                  className="rounded-full xl:border-[5px] border-white xl:mr-[-25px] h-auto xl:w-14  2xl:w-16  lg:w-12  lg:border-[3px] w-12  border-[3px] mr-[-15px]"
                  src={person2}
                  alt=""
                />
                <img
                  className="rounded-full xl:border-[5px] border-white xl:mr-[-25px] h-auto xl:w-14  2xl:w-16  lg:w-12  lg:border-[3px] w-12  border-[3px] mr-[-15px]"
                  src={person3}
                  alt=""
                />
                <img
                  className="rounded-full xl:border-[5px] border-white xl:mr-[-25px] h-auto xl:w-14  2xl:w-16  lg:w-12  lg:border-[3px] w-12  border-[3px] mr-[-15px]"
                  src={person4}
                  alt=""
                />
                <img
                  className="rounded-full xl:border-[5px] border-white xl:mr-[-25px] h-auto xl:w-14  2xl:w-16  lg:w-12  lg:border-[3px] w-12  border-[3px] mr-[-15px]"
                  src={person5}
                  alt=""
                />
              </div>
              <p className=" md:text-base xl:text-lg text-lg 2xl:text-xl text-seconday ">
                Trusted by more that 5.3 Million People
              </p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className=" lg:order-2 ">
          <img
            className="h-[450px] sm:w-full xl:w-[600px] lg:w-[500px] object-cover lg:h-auto 2xl:w-auto sm:h-[400px] md:h-[500px] border-l-[1px] border-divider"
            src={HeroImg}
            alt=""
            srcset=""
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
