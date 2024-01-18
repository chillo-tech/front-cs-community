import { getInitials, getRandomHexColor, textEllipsis } from "@/utils";
import React from "react";
import "./styles/colors.css";
const AvisCard = ({
  name,
  title,
  description,
  note,
}: {
  name: string;
  note: number;
  title: string;
  description: string;
}) => {
  return (
    <div className="p-2 m-1 bg-[#ebedfc] rounded-md h-full">
      <div className="flex gap-1">
        <div
          className={`rounded-sm h-[45px] w-[45px] flex items-center justify-center gap-1 ${getRandomHexColor()}`}
        >
          {getInitials(name)}
        </div>
        <p>
          <span className="text-bold">{name}</span>
          <span className="text-[#868899]">{title}</span>
        </p>
      </div>
      <div className="flex gap-1">
        {Array(note)
          .fill(0)
          .map((el, idx) => {
            return (
              <svg
                key={idx}
                className="w-5 h-5 text-yellow-500"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"></path>
              </svg>
            );
          })}
      </div>
      <p dangerouslySetInnerHTML={{ __html: textEllipsis(description, 100) }} />
    </div>
  );
};

export { AvisCard };
