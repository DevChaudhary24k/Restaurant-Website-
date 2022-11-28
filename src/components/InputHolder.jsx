import React from "react";

const InputHolder = (props) => {
  return (
    <div>
      <div className="lg:text-base xl:text-lg 2xl:text-xl font-medium">
        {props.title}
      </div>
      <div>
        <input className="bg-[#C5C5C7] w-[300px] h-[35px] lg:w-[200px] lg:h-[30px] xl:w-[250px]  xl:h-[40px] 2xl:w-[300px]  2xl:h-[50px] rounded-md xl:rounded-lg 2xl:rounded-xl xl:text-seconday font-bold text-center lg:text-base lg:rounded-lg" />
      </div>
    </div>
  );
};

export default InputHolder;
