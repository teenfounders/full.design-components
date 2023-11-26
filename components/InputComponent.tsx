import React, { ChangeEvent, HTMLInputTypeAttribute } from "react";
import { twMerge } from "tailwind-merge";

type Props = {
  placeholder?: string;
  value?: string;
  onChange?: (event: ChangeEvent<HTMLInputElement>) => void;
  type?: HTMLInputTypeAttribute;
  className?: string;
};

const InputComponent = ({
  placeholder,
  value,
  onChange,
  type,
  className,
}: Props) => {
  return (
    <div className="w-full h-full">
      <input
        placeholder={placeholder}
        value={value}
        type={type}
        onChange={onChange}
        className={twMerge("py-[15px] px-5 ", className)}
      />
    </div>
  );
};

export default InputComponent;
