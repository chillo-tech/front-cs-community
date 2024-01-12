import React from "react";

const SubmitButton = ({ text }: { text: string }) => {
  return (
    <button
      type="submit"
      className={
        "text-center px-2 flex mx-auto h-fit py-2 mt-1 justify-items-center justify-center items-center bg-blue-600 shadow-sm rounded-lg md:w-full w-fit"
      }
    >
      <span className="font-extralight text-xl text-white ">Transmettre</span>
    </button>
  );
};

export { SubmitButton };
