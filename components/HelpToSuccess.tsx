import React from "react";
import Button from "./button";

type Props = {};

let dummydata = [
  "WEBSITES",
  "LANDING PAGES",
  "SAAS",
  "USER EXPERIENCE",
  "MOBILE APPS",
  "RESEARCH",
  "LOGOS",
  "BRAND GUIDELINES",
  "DESIGN SYSTEMS",
  "DIGITAL ADS",
  "SOCIAL MEDIA GRAPHICS",
  "BLOG GRAPHICS",
  "ICONS",
  "BANNERS",
  "INFOGRAPHICS ",
  "ILLUSTRATIONS",
  "PITCH DECKS",
  "NEWSLETTERS",
  "FRAMER DEV",
  "WEBFLOW DEV",
  "REACT DEV",
] as const;

const HelpToSuccess = (props: Props) => {
  return (
    <div className="max-w-screen mx-auto px-4  ">
      <div className="text-center max-md:leading-[2em]">
        <h1 className="text-[32px] md:text-[64px] xl:text-[80px] font-extrabold">
          HOW CAN WE HELP?
        </h1>
        <h1 className="font-size text-[32px] md:text-[64px] xl:text-[80px]">
          FROM IDEA TO SUCCESS
        </h1>
      </div>
      <div className="flex text-center flex-wrap justify-center gap-[10px] md:gap-5 max-w-6xl py-8 w-full">
        {dummydata.map((item, id) => {
          return (
            <span key={id} className="flex  flex-wrap">
              <Button
                text={item}
                className="rounded-xl  text-[14px] md:text-[18px] xl:text-[21px] py-[10px] px-5 "
              />
            </span>
          );
        })}
      </div>
      <p className="w-full  justify-center flex text-lg text-gray-600 h-full">
        If it&apos;s not here, it&apos;s still possible. Let&apos;s talk.
      </p>
    </div>
  );
};

export default HelpToSuccess;
