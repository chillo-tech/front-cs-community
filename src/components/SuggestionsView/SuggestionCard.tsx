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
  return !name.includes("undefined") && name && title ? (
    <div className="flex gap-3 rounded-xl md:bg-transparent bg-white p-5 h-[105px] w-max min-w-[200px] max-w-[500px] items-center">
      <div
        className={`rounded-full text-xl font-bold flex-shrink-0 h-[45px] w-[45px] flex items-center justify-center gap-1 ${getRandomHexColor()}`}
      >
        {getInitials(name)}
      </div>
      <div>
        <div className="flex items-center gap-5">
          <h3 className="font-bold">{wordEllipsis(name, 2)}</h3>{" - "}
          <p className="font-semibold italic text-sm">
            {capitalizeWord(
              POSITIONS.find((el) => el.value === position)?.label
            )}
          </p>
        </div>
        <p>{textEllipsis(title, 100, "...")}</p>
      </div>
    </div>
  ) : null;
};

export { SuggestionCard };
