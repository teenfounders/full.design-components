import Image from "next/image";
import React from "react";

type Props = {};

const Unlimited = (props: Props) => {
  return (
    <div className="   w-full h-full relative my-5 ">
      <div className="text-start text-red-500 my-10">
        <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold">
          UNLIMITED?
        </h1>
        <h1 className="font-size-red  text-[32px] md:text-[64px] xl:text-[80px]">
          NO SUCH THING
        </h1>
      </div>
      <div className="min-h-[600px] bg-red-500 p-5 flex flex-col justify-between rounded-3xl items-center w-full ">
        <div className="flex flex-col">
          {/* <Image src={} */}
          here is image
        </div>
        <div className="max-w-6xl  ">
          <p className="text-[21px] md:text-[34px] text-white w-full leading-snug text-center font-extrabold">
            Unlike other design subscription services, we prioritize
            transparency and quality over misleadingly promising unlimited
            requests and iterations. Indeed, you can submit multiple requests
            and we&apos;ll refine them until you&apos;re satisfied, but within a
            realistic timeframe. Our goal is to create meaningful, lasting
            relationships and to ensure satisfaction and quality in every
            project we undertake.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Unlimited;
