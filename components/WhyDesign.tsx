import React from "react";
import WhyDesignCard from "./WhyDesignCard";

type Props = {};

const WhyDesign = (props: Props) => {
  return (
    <div className="min-w-full h-full relative mt-10 ">
      <div className="text-start my-10">
        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold">
          WHY FULL DESIGN?
        </h1>
        <h1 className="font-size text-[32px] md:text-[64px] xl:text-[80px]">
          {" "}
          SIX REASONS TO JOIN US
        </h1>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2  w-full  justify-center   text-white gap-5">
        <WhyDesignCard />
        <WhyDesignCard />
        <WhyDesignCard />
        <WhyDesignCard />
      </div>
    </div>
  );
};

export default WhyDesign;
