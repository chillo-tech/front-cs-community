import {
  POSITIONS,
  capitalizeWord,
  getInitials,
  getRandomHexColor,
  textEllipsis,
  wordEllipsis,
} from "@/utils";

const SuggestionCard = ({
  name,
  title,
  position,
}: {
  name: string;
  title: string;
  position: string;
}) => {
  return name && title && position ? (
    <div className="flex gap-3 rounded-xl md:bg-transparent bg-white p-5 h-[105px] w-max min-w-[200px] max-w-[400px] items-center">
      <div
        className={`rounded-full text-xl font-bold flex-shrink-0 h-[45px] w-[45px] flex items-center justify-center gap-1 ${getRandomHexColor()}`}
      >
        {getInitials(name)}
      </div>
      <div>
        <h3 className="font-bold">{wordEllipsis(name, 2)}</h3>{" "}
        <p className="font-semibold italic text-sm mb-1">
          {capitalizeWord(POSITIONS.find((el) => el.value === position)?.label)}
        </p>
        <p>{textEllipsis(title, 60, "...")}</p>
      </div>
    </div>
  ) : null;
};

export { SuggestionCard };
