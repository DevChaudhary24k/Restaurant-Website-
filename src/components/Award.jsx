import React from "react";

const Award = (props) => {
  return (
    <div className="">
      <img
        src={props.imgURL}
        className="lg:w-auto lg:h-auto w-[300px] h-[300px]"
      />
    </div>
  );
};

export default Award;
