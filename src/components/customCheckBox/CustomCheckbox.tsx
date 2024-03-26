"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { useCustomCheckBox } from "./useCustomCHeckBox";
import { UseFormRegister } from "react-hook-form";

const CustomCheckbox = <U extends (...args: any[]) => any>(props: {
  selected: number | null | undefined;
  index: number;
  label: string;
  setSelected: () => void;
  value: string | number;
  register: U;
  name: Parameters<U>[0];
  id: string;
  activeColor: string;
}) => {
  const {
    label,
    setSelected,
    selected,
    index,
    register,
    id,
    value,
    name,
    activeColor,
  } = props;
  const restProps = register(name);
  const { element, isSelected, handleClick } = useCustomCheckBox({
    id,
    index,
    setSelected,
    selected,
  });

  return (
    <>
      <div
        onClick={handleClick}
        role="radio"
        aria-checked="true"
        tabIndex={0}
        className={`flex justify-between relative cursor-pointer rounded-lg px-5 py-3 shadow-md focus:outline-none text-white ${
          isSelected ? activeColor : "bg-white"
        }`}
      >
        <input id={id} type="radio" hidden value={value} {...restProps} />
        <span className={`${isSelected ? "text-white" : "text-black"}`}>
          {label}
        </span>
        <div className="shrink-0 text-white">
          <svg
            stroke="currentColor"
            fill="currentColor"
            strokeWidth="0"
            viewBox="0 0 1024 1024"
            className="h-6 w-6"
            height="1em"
            width="1em"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm193.5 301.7l-210.6 292a31.8 31.8 0 0 1-51.7 0L318.5 484.9c-3.8-5.3 0-12.7 6.5-12.7h46.9c10.2 0 19.9 4.9 25.9 13.3l71.2 98.8 157.2-218c6-8.3 15.6-13.3 25.9-13.3H699c6.5 0 10.3 7.4 6.5 12.7z"></path>
          </svg>
        </div>
      </div>
      {/* <div
        onClick={handleClick}
        className={` mx-3 h-fit px-2 py-1 flex rounded-md cursor-pointer gap-2 items-center border-2 transition-all  ${
          isSelected ? " border-blue-500 " : " border-blue-200 "
        } ${isSelected ? " border-blue-800 " : "hover:border-blue-300"}`}
      >
        <input id={id} type="radio" value={value} {...restProps} />
        <span className="">{label}</span>
      </div> */}
    </>
  );
};

export { CustomCheckbox };
