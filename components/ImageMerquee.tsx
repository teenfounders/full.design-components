import React from "react";
import Image, { StaticImageData } from "next/image";
import i1 from "@/assets/1.png";
import i2 from "@/assets/2.png";
import i3 from "@/assets/3.png";
import i4 from "@/assets/4.png";
import i5 from "@/assets/5.png";
import Marquee from "react-fast-marquee";

// ImageMarquee component
interface props {
  f1?: string | StaticImageData;
  f2?: string | StaticImageData;
  f3?: string | StaticImageData;
  f4?: string | StaticImageData;
  f5?: string | StaticImageData;
}
const ImageMarquee = ({ f1, f2, f3, f4, f5 }: props) => {
  return (
    <div className="">
      <Marquee
        direction="right"
        gradientColor="white"
        speed={150}
        className="rounded-xl"
      >
        <div className="flex space-x-4 min-w-full">
          {/* Adjust the height of the Image component based on the container's height */}
          <div className="flex max-h-[325px]  gap-4">
            <Image
              src={f1 || i1}
              alt={`Image `}
              className="object-cover"
              width={400}
              height={375}
            />
            <Image
              src={f2 || i2}
              alt={`Image `}
              className="object-cover"
              width={400}
              height={375}
            />
            <Image
              src={f3 || i3}
              alt={`Image `}
              className="object-cover"
              width={400}
              height={375}
            />
            <Image
              src={f4 || i4}
              alt={`Image `}
              className="object-cover"
              width={400}
              height={375}
            />
            <Image
              src={f5 || i5}
              alt={`Image `}
              className="object-cover"
              width={400}
              height={375}
            />
          </div>
        </div>
      </Marquee>
    </div>
  );
};

// Export the component
export default ImageMarquee;
