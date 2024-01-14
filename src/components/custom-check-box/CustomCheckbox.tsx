"use client";
import React, { use, useEffect, useRef, useState } from "react";
import { useCustomCheckBox } from "./useCustomCHeckBox";

const CustomCheckbox = (props: {
  selected: number | null | undefined;
  index: number;
  label: string;
  setSelected: () => void;
  value: string;
  register: Function;
  name: string;
  id: string;
  // [p: string]: any;
}) => {
  const { label, setSelected, selected, index, register, id, value, name } =
    props;
  const restProps = register(name);
  const { element, isSelected, handleClick } = useCustomCheckBox({
    id,
    index,
    setSelected,
    selected,
  });

  return (
    <div
      onClick={handleClick}
      className={` mx-3 h-fit px-2 py-1 flex rounded-md cursor-pointer gap-2 items-center border-2 transition-all  ${
        isSelected ? " border-blue-500 " : " border-blue-200 "
      } ${isSelected ? " border-blue-800 " : "hover:border-blue-300"}`}
    >
      <input id={id} type="radio" value={value} {...restProps} />
      <span className="">{label}</span>
    </div>
  );
};

export { CustomCheckbox };
