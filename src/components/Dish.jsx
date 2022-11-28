import React from "react";

const Dish = (props) => {
  return (
    <div className="flex flex-col rounded-2xl md:w-[400px] w-[380px] shadow-xl bg-[#f8fafc] lg:w-[320px] 2xl:w-[370px] items-center mx-0">
      <img
        src={props.imgURL}
        className="xl:w-[280px] 2xl:w-[340px] md:w-[370px] lg:w-[290px] h-[260px] object-cover rounded-xl mt-[5%]"
      />
      <div className="flex flex-col text-center">
        <p className="font-semibold text-3xl pt-6">{props.name}</p>
        <p className="text-xl pt-3 pb-9">{props.description}</p>
      </div>
    </div>
  );
};

export default Dish;
