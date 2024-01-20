import {
  wordEllipsis,
  getInitials,
  getRandomHexColor,
  textEllipsis,
} from "@/utils";
import React from "react";

const SuggestionCard = ({ name, title }: { name: string; title: string }) => {
  return (
    <div className="flex gap-3 rounded-[25px] md:bg-transparent bg-white p-5 h-[75px] w-[300px]">
      <div
        className={`rounded-full flex-shrink-0 h-[45px] w-[45px] flex items-center justify-center gap-1 ${getRandomHexColor()}`}
      >
        {getInitials(name)}
      </div>
      <div>
        <p>{textEllipsis(title, 20, "...")}</p>
        <p>
          <span className="font-bold">
            {textEllipsis(wordEllipsis(name, 2), 20)}
          </span>{" "}
        </p>
      </div>
    </div>
  );
};

export { SuggestionCard };
