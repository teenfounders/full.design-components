import React, { HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";
type Props = {
  className?: string;
  text?: string;
  type?: "submit" | "button";
};

const Button = ({ className, text, type = "button" }: Props) => {
  return (
    <button
      type={type}
      className={twMerge(
        "py-[10px] px-5   relative min-w-max  bg-black text-white font-bold text-[14px] md:text-[22px] lg:text-[28px]  ",
        className
      )}
    >
      {text}
    </button>
  );
};

export default Button;
