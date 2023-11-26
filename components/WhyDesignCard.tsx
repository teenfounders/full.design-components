import { StaticImageData } from "next/image";
import React from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  image?: StaticImageData | string | any;
  title?: string;
  description?: string;
  className?: string;
};

const WhyDesignCard = ({ image, title, description, className }: Props) => {
  return (
    <div
      className={twMerge(
        "max-w-[700px] max-h-[500px] md:min-h-[500px] w-full relative flex flex-col justify-between p-10 rounded-3xl broder-black border-2 bg-black",
        className
      )}
    >
      <div className="">{image || "this is for image"}</div>
      <div className="">
        <h1 className="text-[43px] font-bold">
          {title || "Quality is Our Priority  "}
        </h1>
        <p className="text-xl  text-[#ffffff]">
          {description ||
            "  Life happens, and we get that. Adapting to your business and design needs, we offer the flexibility to scale up or down, pause, or cancel  when necessary."}
        </p>
      </div>
    </div>
  );
};

export default WhyDesignCard;
