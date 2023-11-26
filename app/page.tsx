"use client";
import Button from "@/components/button";
import Image from "next/image";
import { GoArrowUpRight } from "react-icons/go";
import ImageMarquee from "@/components/ImageMerquee";
import LeftMoveMarquee from "@/components/LeftMoveMarquee";
import RightMoveMarquee from "@/components/RightMoveMarquee";
import HelpToSuccess from "@/components/HelpToSuccess";
import ParallelScroll from "@/components/ParallelScroll";
import WhyDesign from "@/components/WhyDesign";
import Unlimited from "@/components/Unlimited";
import f1 from "@/assets/f1.png";
import f2 from "@/assets/f2.png";
import f3 from "@/assets/f3.png";
import f4 from "@/assets/f4.png";
import logodesign from "@/assets/logo.full.desgin.svg";
import f5 from "@/assets/f5.png";
import { useEffect, useState } from "react";
import HowDoesItWork from "@/components/HowDoesItWork";
import SubscriptComponent from "@/components/SubscriptComponent";
import Footer from "@/components/Footer";
export default function Home() {
  const [show, setShow] = useState(true);
  const [showDownload, setShowDownload] = useState(true);
  const [prevScrollY, setPrevScrollY] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const controlNavbar = () => {
    const scrollY = window.scrollY;
    const viewportHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    setScrollY(scrollY);
    if (scrollY > 200) {
      if (scrollY > prevScrollY) {
        // Scrolling down
        setShow(true);
      } else {
        // Scrolling up
        setShow(false);
      }

      // Update the previous scroll position
      setPrevScrollY(scrollY);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [scrollY]);

  return (
    <div
      className="min-h-screen  py-20 flex flex-col items-center   justify-center relative w-full "
      id="intro"
    >
      <div
        className={`fixed z-50 transition-all  ease-in-out duration-500 ${
          show
            ? "opacity-100 transform translate-y-0"
            : "opacity-0 transform translate-y-full"
        } mx-auto max-md:px-10 bottom-5 h-full  w-full max-h-[81px]  md:max-w-[450px]`}
      >
        <div className="flex items-center flex-nowrap gap-0 shadow-xl bg-[#FFFFFF] h-full justify-between p-5  rounded-3xl">
          {/* <div className="p-2 flex md:flex justify-around rounded-[20px] flex-nowrap h-full items-center w-full relative bg-white"> */}
          <Image
            src={logodesign}
            className="max-w-full object-cover max-md:w-[81px] max-h-full"
            width={100}
            height={80}
            alt="qrcode"
          />
          <h1 className="uppercase flex border-2 items-center  border-black py-[10px] px-5 rounded-2xl font-black font-mona-sans text-[14px] text-[#080808] ">
            Book a call <GoArrowUpRight size={30} className="text-semibold " />
          </h1>
        </div>
      </div>
      <div className=" flex items-center flex-col  gap-10 p-0 relative h-screen w-full  ">
        <div className="border-[3px] px-[14px] py-[6px] border-[#ff1515] items-center justify-center rounded-xl flex-col gap-10 min-h-min max-w-[540px] overflow-visible relative min-w-min">
          <div className="outline-none flex flex-col justify-start shrink-0  text-[#ff1515]">
            <h5 className="text-sm lg:text-2xl  font-extrabold uppercase -tracking-normal ">
              A Founder&apos;s Best Friend
            </h5>
          </div>
        </div>
        <div className="items-center flex grow-0 shrink-0 basis-0 flex-col flex-wrap gap-5 min-h-min justify-center overflow-visible p-0 relative w-full ">
          <div className=" outline-none flex flex-col justify-start shrink-0 grow-0 basis-0">
            <h1 className=" md:text-[77px] text-[42px] lg:text-[100px] font-bold lg:font-extrabold  leading-none text-center tracking-tighter break-words  uppercase">
              We make designs that drive big results
            </h1>
          </div>
          <div className=" outline-none flex flex-col justify-start shrink-0 grow-0 basis-0 max-w-[1080px]  relative  w-full ">
            <p
              style={{ lineHeight: 1.4 }}
              className="text-center max-md:text-lg md:text-2xl lg:text-4xl font-medium -tracking-wider leading-9"
            >
              A full-service design agency helping you grow your business.
              Reduce costs and move quickly with our world-class team. Fast
              delivery, no contracts. Pause or cancel anytime.
            </p>
          </div>
        </div>
        <div className="items-center flex  gap-10 min-h-min justify-center overflow-visible p-0 relative w-full">
          <div className="">
            <Button
              className="border-4  border-black rounded-xl md:rounded-3xl md:px-[40px] md:py-[20px]"
              text="Book a call"
            />
          </div>
          <div className="">
            <Button
              type="button"
              text="View pricing"
              className="border-4 border-black text-black md:px-[40px] md:py-[20px] rounded-xl md:rounded-3xl leading-tight bg-transparent "
            />
          </div>
        </div>
        <div className="items-center ltr:blur-xl  flex max-w-full w-full px-3 backdrop-blur-2xl justify-center flex-col">
          <div className="max-w-full  w-full broder-s-4 border-white   flex flex-col items-center min-h-min   relative">
            <h4 className="xl:text-[42px] md:text-[34px] text-[26px] -tracking-[0.04em] font-bold ">
              Trusted by brands across the globe
            </h4>
            <div className="w-full px-10 ">
              <RightMoveMarquee />
              <LeftMoveMarquee />
            </div>
          </div>
        </div>
        <div className="mt-10">
          <ImageMarquee />
        </div>
        <div className="my-10">
          <HelpToSuccess />
        </div>

        <ParallelScroll />
        <div className="mt-[100px]"></div>
        <div className="">
          <ImageMarquee />
        </div>
        <div className="">
          <WhyDesign />
        </div>
        <div className="w-full">
          <Unlimited />
        </div>

        <div className=" max-md:my-32 w-full h-full max-h-[375px] ">
          <ImageMarquee f1={f1} f2={f2} f3={f3} f4={f4} f5={f5} />
        </div>
        <div className="w-full">
          <HowDoesItWork />
        </div>
        <div className="w-full">
          <SubscriptComponent />
        </div>
        <div className="w-full">
          <Footer />
        </div>
      </div>
    </div>
  );
}
