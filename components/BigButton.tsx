import React from "react";
import { twMerge } from "tailwind-merge";
import Image from "next/image";
import { FaArrowUp } from "react-icons/fa";
import Link from "next/link";
type Props = {
  id?: string;
  className?: string;
  text?: string;
};

const BigButton = ({ text, id, className }: Props) => {
  return (
    <>
      <button
        id={id}
        className={twMerge(
          "py-[10px] px-5 flex justify-center items-center  gap-5   relative min-w-max  bg-black text-white font-bold text-[14px] md:text-[22px] lg:text-[28px]  ",
          className
        )}
      >
        <Link
          className="cursor-pointer relative min-w-max flex justify-center items-center  gap-5 "
          href={`${id}`}
        >
          {text}
          <FaArrowUp />
        </Link>
      </button>
    </>
  );
};

export default BigButton;
