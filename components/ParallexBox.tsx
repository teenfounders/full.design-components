import React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  number?: string;
  title?: string;
  description?: string;
  className?: string;
};

const ParallexBox = ({ number, title, description, className }: Props) => {
  return (
    <div
      className={twMerge(
        ` sticky bg-blue-500 top-24  rounded-[50px] my-5 xl:h-[547px] p-10 flex-1`,
        className
      )}
    >
      <div className=" text-white min-h-full flex max-w-2xl w-full  justify-between flex-col ">
        <div className=" w-[80px] h-[80px] md:w-[120px] bg-white md:h-[120px]  flex justify-center items-center rounded-full text-black font-black text-[32px] md:text-[54px] xl:text-7xl">
          {number}
        </div>
        <h1 className="text-[30px] md:text-[54px] xl:text-7xl font-extrabold text-white">
          {title}
        </h1>
        <p className="text-[16px] md:text-[18px] text-2xl font-medium text-white max-w-4xl w-full tracking-widest">
          {description}
        </p>
      </div>
    </div>
  );
};

export default ParallexBox;
