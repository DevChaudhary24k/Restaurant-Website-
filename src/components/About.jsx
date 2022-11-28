import React from "react";
import UnderLine from "../assets/AboutUnderline.svg";
import dish1 from "../assets/dish1.png";
import dish2 from "../assets/dish2.png";
import dish3 from "../assets/dish3.png";
import dish4 from "../assets/dish4.png";
import dish5 from "../assets/dish5.png";
import dish6 from "../assets/dish6.png";
import AbtImg from "../assets/AboutImage.png";

const About = () => {
  return (
    <div>
      <div className="flex flex-col  items-center max-w-[80%] mx-auto">
        <div className="flex  items-center justify-center mt-[4%] ">
          <p className="text-2xl md:text-3xl max-w-[80%] lg:max-w-none lg:w-auto text-center z-10 lg:text-4xl  2xl:text-5xl font-bold text-seconday mb-[4%]">
            “Why look for someone else, When best is already here”
          </p>
          <img className="absolute " src={UnderLine} alt="" />
        </div>
        <div className="grid md:gap-6 md:grid-cols-5 lg:grid-cols-6 grid-cols-3 xl:gap-14 2xl:gap-20 mt-[-1%] z-10 mx-auto lg:gap-12  gap-8">
          <img
            className="xl:w-40 2xl:w-auto lg:w-36 h-auto md:w-28 w-24 drop-shadow-xl"
            src={dish1}
            alt=""
          />
          <img
            className="xl:w-40 2xl:w-auto lg:w-36 h-auto md:w-28 w-24 drop-shadow-xl"
            src={dish2}
            alt=""
          />
          <img
            className="xl:w-40 2xl:w-auto lg:w-36 h-auto md:w-28 w-24 drop-shadow-xl"
            src={dish3}
            alt=""
          />
          <img
            className="xl:w-40 2xl:w-auto lg:w-36 h-auto hidden md:block  md:w-28 drop-shadow-xl"
            src={dish4}
            alt=""
          />
          <img
            className="xl:w-40 2xl:w-auto lg:w-36 h-auto hidden md:block md:w-28 drop-shadow-xl"
            src={dish5}
            alt=""
          />
          <img
            className="xl:w-40 2xl:w-auto lg:w-36 h-auto hidden lg:block drop-shadow-xl"
            src={dish6}
            alt=""
          />
        </div>
      </div>
      <div className="flex justify-center">
        <div className="bg-primary 2xl:flex-row flex-col flex mt-[5%] rounded-2xl 2xl:p-[1.5%] p-[2.5%] w-[80%] max-w-[1650px] drop-shadow-xl">
          <img
            className="w-full md:h-[400px] xl:h-[500px] rounded-2xl object-cover mb-6 lg:mb-0 sm:h-[350px] 2xl:w-auto 2xl:h-auto 2xl:ml-0"
            src={AbtImg}
          />
          <div className="flex flex-col gap-11 justify-center 2xl:flex-grow 2xl:ml-[5%] items-center text-lg xl:mt-[5%] 2xl:mt-0 md:text-xl">
            <p className="w-[85%] text-center  2xl:text-left">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
              tincidunt nunc posuere turpis fringilla, eu malesuada mauris
              ornare. Praesent vitae feugiat nisi, vel mollis enim. Curabitur
              suscipit nisl ac pharetra varius. Morbi porta egestas neque non
              consequat. Mauris sagittis quam vel diam sollicitudin tincidunt.
              Phasellus efficitur egestas efficitur. Ut ullamcorper lorem massa,
              rhoncus dictum enim accumsan in.
            </p>
            <p className="w-[85%] text-center  2xl:text-left">
              Curabitur ac facilisis sem, eget tristique ex. Cras egestas libero
              quis ex lacinia, sed ullamcorper ante euismod. Sed cursus vel elit
              imperdiet semper. Sed porttitor auctor viverra. Quisque et lacus a
              massa tincidunt venenatis. Aenean congue ut metus scelerisque
              hendrerit. Sed ornare dolor quis tellus dignissim,
            </p>
            <p className="w-[85%] text-center hidden md:block  2xl:text-left">
              Curabitur ac facilisis sem, eget tristique ex. Cras egestas libero
              quis ex lacinia, sed ullamcorper ante euismod. Sed cursus vel elit
              imperdiet semper. Sed porttitor auctor viverra. Quisque et lacus a
              massa tincidunt venenatis. Aenean congue ut metus scelerisque
              hendrerit. Sed ornare dolor quis tellus dignissim,
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
