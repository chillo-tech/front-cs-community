import { wordEllipsis, getInitials, getRandomHexColor } from "@/utils";
import React from "react";

const SuggestionCard = ({ name, title }: { name: string; title: string }) => {
  return (
    <div className="flex gap-3">
      <div
        className={`rounded-full h-[45px] w-[45px] flex items-center justify-center gap-1 ${getRandomHexColor()}`}
      >
        {getInitials(name)}
      </div>
      <div>
        <p>{title}</p>
        <p>
          <span className="font-bold">{wordEllipsis(name, 2)}</span>{" "}
        </p>
      </div>
    </div>
  );
};

export { SuggestionCard };
