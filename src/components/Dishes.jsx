import React from "react";
import Dish from "./Dish";
import img1 from "../assets/MenuItem1.png";
import img2 from "../assets/MenuItem2.png";
import img3 from "../assets/MenuItem3.png";
import img4 from "../assets/MenuItem4.png";
import img5 from "../assets/MenuItem5.png";
import img6 from "../assets/MenuItem6.png";
import img7 from "../assets/MenuItem7.png";
import img8 from "../assets/MenuItem8.png";
import UnderLine from "../assets/AbtUnderline.svg";

const Dishes = () => {
  return (
    <div className="flex flex-col justify-center items-center mt-[12%] lg:mt-[6.5%]">
      {/* Section Title */}
      <div className="2xl:max-w-[522px] relative ">
        <img src={UnderLine} className="absolute right-[-6%] top-[65%] -z-10" />
        <p className="lg:text-5xl font-semibold text-3xl md:text-4xl">
          Our Featured Dishes
        </p>
      </div>

      {/* Dishes Container */}
      <div className="grid xl:grid-cols-3 lg:grid-cols-2 2xl:grid-cols-4 gap-14 mt-8 lg:mt-14 ">
        <Dish
          name="Lorem Sushi"
          imgURL={img1}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Dish
          name="Rolem Polem"
          imgURL={img2}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Dish
          name="Dolorm Sit"
          imgURL={img3}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Dish
          name="Dolor Amet"
          imgURL={img4}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Dish
          name="Sushi Dolorm"
          imgURL={img5}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Dish
          name="Emit Eggs"
          imgURL={img6}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Dish
          name="Stunned Grill"
          imgURL={img7}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
        <Dish
          name="Decker Sandwich"
          imgURL={img8}
          description="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        />
      </div>
    </div>
  );
};

export default Dishes;
