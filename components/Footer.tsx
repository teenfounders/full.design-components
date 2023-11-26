import React from "react";
import BigButton from "./BigButton";
import Image from "next/image";
import logodesign from "@/assets/logo.full.desgin.svg";
type Props = {};

const Footer = (props: Props) => {
  return (
    <div className="w-full flex flex-col justify-center items-end gap-10 mb-10 ">
      <BigButton
        id={"#intro"}
        className={
          "min-w-full md:text-[54px]  text-[30px] xl:text-7xl p-[40px] rounded-3xl  "
        }
        text="Back to top"
      />
      <div className="flex max-w-md w-full justify-end items-end">
        <Image
          src={logodesign}
          className="max-w-full rotate-180 object-cover max-md:max-w-[290px] max-h-full"
          width={470}
          height={80}
          alt="qrcode"
        />
      </div>
    </div>
  );
};

export default Footer;
