import {
  capitalizeWord,
  getInitials,
  getRandomHexColor,
  textEllipsis,
  wordEllipsis,
} from "@/utils";

const SuggestionCard = ({
  name,
  title,
  tags,
}: {
  name: string;
  title: string;
  tags: string;
}) => {
  return (
    <div className="flex gap-3 rounded-xl md:bg-transparent bg-white p-5 h-[105px] w-[400px] items-center">
      <div
        className={`rounded-full text-xl font-bold flex-shrink-0 h-[45px] w-[45px] flex items-center justify-center gap-1 ${getRandomHexColor()}`}
      >
        {getInitials(name)}
      </div>
      <div>
        <div>
          <h3 className="font-bold">{wordEllipsis(name, 2)}</h3>{" "}
          <p className="font-semibold">{capitalizeWord(tags)}</p>
        </div>
        <p>{textEllipsis(title, 60, "...")}</p>
      </div>
    </div>
  );
};

export { SuggestionCard };
