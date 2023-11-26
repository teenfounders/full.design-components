import React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  number?: string;
  className?: string;
  description?: string;
};

const HowDoesItWordCard = (props: Props) => {
  return (
    <div className="w-full h-auto bg-[#0000001B] rounded-md flex flex-col justify-center items-center gap-5 py-5">
      <div
        className={twMerge(
          "w-[80px] h-[80px] md:w-[120px] max-w-full bg-white md:h-[120px]  flex justify-center items-center rounded-full text-black font-black text-[32px] md:text-[54px] xl:text-7xl",
          props.className
        )}
      >
        {props.number || "1"}
      </div>
      <h4 className="xl:text-[42px] px-2 md:text-[34px] text-[26px] -tracking-[0.04em] font-bold ">
        {props.description || "Trusted by brands across the globe"}
      </h4>
    </div>
  );
};

export default HowDoesItWordCard;
