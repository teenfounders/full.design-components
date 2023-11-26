import React from "react";
import HowDoesItWordCard from "./HowDoesItWordCard";

type Props = {};

const HowDoesItWork = (props: Props) => {
  return (
    <div className="min-w-full h-full relative mt-10 ">
      <div className="text-start my-10">
        <h1 className="font-size text-[32px] md:text-[64px] xl:text-[80px]">
          {" "}
          BUT REALLY…
        </h1>
        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold">
          HOW DOES IT WORK?
        </h1>
      </div>
      <div className="w-full flex flex-col gap-4">
        <HowDoesItWordCard
          number="1"
          description="Schedule a call"
          className="text-white bg-black"
        />
        <HowDoesItWordCard
          number="2"
          description="Send a requests"
          className="text-white bg-[#FF1515]"
        />
        <HowDoesItWordCard
          number="3"
          description="Get designs"
          className="text-white bg-[#0BD65C]"
        />
      </div>
    </div>
  );
};

export default HowDoesItWork;
