"use client";
import React from "react";
import InputComponent from "./InputComponent";
import Button from "./button";

type Props = {};

const SubscriptComponent = (props: Props) => {
  const [email, setEmail] = React.useState("");

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const subscribeHandler = () => {
    console.log("Subscribe with email:", email);
    // Add your subscription logic here
  };
  return (
    <div className="w-full h-full relative mb-32 border-[1px] border-slate-300 rounded-2xl">
      <div className="flex w-full justify-center items-center gap-[40px] h-full flex-col">
        <div className="flex flex-col text-center gap-5">
          <h1 className="text-4xl md:text-6xl lg:text-[80px] font-extrabold">
            GET THE FULL PICTURE
          </h1>
          <h4 className="xl:text-[42px] md:text-[34px]  text-[26px] -tracking-[0.04em] font-bold ">
            Join us for a monthly dose of design ideas, <br /> project
            spotlights, and special offers.
          </h4>
        </div>
        <div className="w-full max-w-[495px] flex gap-4 flex-col text-center justify-center px-2 items-center ">
          <InputComponent
            placeholder="name@email.com"
            value={email}
            onChange={onChangeHandler}
            className="w-full rounded-2xl border-[1px] border-slate-300"
            type="text"
          />
          <Button
            className="border-4 max-w-[495px] w-full text-[21px] border-black rounded-xl md:rounded-3xl   "
            text="Subscribe"
          />
        </div>
      </div>
    </div>
  );
};

export default SubscriptComponent;
