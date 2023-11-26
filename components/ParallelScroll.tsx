import React from "react";
import ParallexBox from "./ParallexBox";

type Props = {};

const ParallelScroll = (props: Props) => {
  return (
    <div
      className="relative w-full mb-40
      "
    >
      <div className="w-full   relative h-full min-h-screen">
        <div className="text-start my-10">
          <h1 className="text-[32px] md:text-[64px] xl:text-[80px] font-extrabold">
            HOW CAN WE HELP?
          </h1>
          <h1 className="font-size text-[32px] md:text-[64px] xl:text-[80px]">
            FROM IDEA TO SUCCESS
          </h1>
        </div>
        <div className="relative h-full rounded-xl ">
          {/* <div className="sticky bg-black top-24 rounded-[50px] my-5  max-h-[80vh] h-full  flex-1">
            <div className=" text-white min-h-full justify-evenly flex p-10 flex-col gap-10">
              <span className="md:h-[120px] bg-white max-h-[120px] max-w-[120px] w-full h-full flex justify-center items-center  rounded-full text-black font-black text-[32px] md:text-[54px] xl:text-7xl">
                1
              </span>
              <h1 className="text-[30px] md:text-[54px] xl:text-7xl font-extrabold text-white">
                BEGIN YOUR <br />
                JOURNEY
              </h1>
              <p className="text-[16px] md:text-[18px] text-2xl font-medium text-white max-w-4xl w-full tracking-widest">
                {" "}
                Subscribe to our plan and gain access to a dedicated Slack
                channel. Your project manager will reach out within 24 hours. We
                work with email, Loom, Notion Docs, and can adapt to your
                preferred tools and workflows.
              </p>
            </div>
          </div>
          <div className="sticky bg-green-500 top-24 rounded-[50px] my-5 max-h-[80vh] h-full flex-1">
            <div className=" text-white min-h-full flex  justify-evenly   p-10 flex-col gap-10">
              <span className="md:h-[120px] bg-white max-h-[120px] max-w-[120px] w-full h-full flex justify-center items-center  rounded-full text-black font-black text-[32px] md:text-[54px] xl:text-7xl">
                2
              </span>
              <h1 className="text-[30px] md:text-[54px] xl:text-7xl font-extrabold text-white">
                BEGIN YOUR <br /> JOURNEY
              </h1>
              <p className="text-[16px] md:text-[18px] text-2xl font-medium text-white max-w-4xl w-full tracking-widest">
                {" "}
                Subscribe to our plan and gain access to a dedicated Slack
                channel. Your project manager will reach out within 24 hours. We
                work with email, Loom, Notion Docs, and can adapt to your
                preferred tools and workflows.
              </p>
            </div>
          </div> */}
          <ParallexBox
            className="bg-green-500 "
            number="1"
            title="BEGIN YOUR JOURNEY"
            description="  Subscribe to our plan and gain access to a dedicated Slack
                channel. Your project manager will reach out within 24 hours. We
                work with email, Loom, Notion Docs, and can adapt to your
                preferred tools and workflows."
          />
          <ParallexBox
            className="bg-black"
            number="2"
            title="BEGIN YOUR JOURNEY"
            description="  Subscribe to our plan and gain access to a dedicated Slack
                channel. Your project manager will reach out within 24 hours. We
                work with email, Loom, Notion Docs, and can adapt to your
                preferred tools and workflows."
          />
          <ParallexBox
            className="bg-blue-500"
            number="3"
            title="BEGIN YOUR JOURNEY"
            description="  Subscribe to our plan and gain access to a dedicated Slack
                channel. Your project manager will reach out within 24 hours. We
                work with email, Loom, Notion Docs, and can adapt to your
                preferred tools and workflows."
          />
          {/* <div className="sticky bg-blue-500 top-24  rounded-[50px] my-5 max-h-[80vh] h-full flex-1">
            <div className=" text-white min-h-full flex  justify-evenly   p-10 flex-col gap-10">
              <span className="md:h-[120px] bg-white max-h-[120px] max-w-[120px] w-full h-full flex justify-center items-center  rounded-full text-black font-black text-[32px] md:text-[54px] xl:text-7xl">
                3
              </span>
              <h1 className="text-[30px] md:text-[54px] xl:text-7xl font-extrabold text-white">
                BEGIN YOUR <br />
                JOURNEY
              </h1>
              <p className="text-[16px] md:text-[18px] text-2xl font-medium text-white max-w-4xl w-full tracking-widest">
                {" "}
                Subscribe to our plan and gain access to a dedicated Slack
                channel. Your project manager will reach out within 24 hours. We
                work with email, Loom, Notion Docs, and can adapt to your
                preferred tools and workflows.
              </p>
            </div>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default ParallelScroll;
