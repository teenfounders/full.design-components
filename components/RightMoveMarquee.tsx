import React from "react";
import Image from "next/image";
import image6 from "@/assets/svgexport-6.svg";
import image7 from "@/assets/svgexport-7.svg";
import image8 from "@/assets/svgexport-8.svg";
import image9 from "@/assets/svgexport-9.svg";
import image10 from "@/assets/svgexport-10.svg";
import Marquee from "react-fast-marquee";
type Props = {};

const RightMoveMarquee = (props: Props) => {
  return (
    // <div className="relative min-w-full flex overflow-x-hidden">
    <div className="py-5 w-full flex gap-10 overflow-hidden   ">
      <Marquee
        direction="right"
        gradientColor="white"
        gradientWidth={200}
        gradient={true}
        speed={150}
      >
        <div className="flex gap-5  space-x-4 ">
          <Image
            src={image6}
            width={10}
            height={10}
            alt="this is logo of the brand"
            className="h-fit w-full"
          />
          <Image
            src={image7}
            width={10}
            height={10}
            alt="this is logo of the brand"
            className="h-fit w-full"
          />
          <Image
            src={image8}
            width={10}
            height={10}
            alt="this is logo of the brand"
            className="h-fit w-full"
          />
          <Image
            src={image9}
            width={10}
            height={10}
            alt="this is logo of the brand"
            className=" h-fit w-full"
          />
          <Image
            src={image10}
            width={10}
            height={10}
            alt="this is logo of the brand"
            className=" h-fit w-full"
          />
          <Image
            src={image9}
            width={10}
            height={10}
            alt="this is logo of the brand"
            className="h-fit w-full"
          />
          <Image
            src={image10}
            width={10}
            height={10}
            alt="this is logo of the brand"
            className=" h-fit w-full"
          />
          <Image
            src={image10}
            width={10}
            height={10}
            alt="this is logo of the brand"
            className=" h-fit w-full"
          />
          <Image
            src={image10}
            width={10}
            height={10}
            alt="this is logo of the brand"
            className=" h-fit w-full"
          />
        </div>
      </Marquee>
    </div>
  );
};

export default RightMoveMarquee;
