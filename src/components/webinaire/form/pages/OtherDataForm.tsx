import formStyles from "@/styles/Form.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { context } from "@/context/WebinaireContext";
const OtherDataForm = () => {
  const { register, channels, channel } = useContext(context);
  return (
    <>
      {/* connaissance webinaire */}
      <fieldset className={formStyles.form_control}>
        <label
          className={formStyles.form_control__label}
          htmlFor={`consentement_marketing`}
        >
          <span className={formStyles.form_control__label__first}>
            Comment avez vous pris connaissance de ce webinaire
          </span>
        </label>
        <div className="space-y-2">
          {[
            ...channels,
            {
              id: 0,
              title: "Autre (précisez)",
            },
          ].map((item) => (
            <label
              className={`flex w-full cursor-pointer items-center justify-between px-3 py-2 gap-2 rounded-lg border border-gray-200 shadow-sm  transition-all hover:bg-green-400 hover:text-white ${classNames(
                {
                  "hover:!bg-green-500 bg-green-500 text-white":
                    item.id === channel,
                }
              )}`}
              key={`${item.id}-radio`}
              htmlFor={`${item.id}-radio`}
            >
              {item.title}{" "}
              <input
                type="radio"
                className="hidden"
                id={`${item.id}-radio`}
                {...register("channel")}
                value={item.id}
              />
              {item.id === channel ? (
                <span className="rounded-full w-5 h-5 bg-white text-green-500 flex items-center justify-center">
                  &#10003;
                </span>
              ) : null}
            </label>
          ))}
        </div>
      </fieldset>
    </>
  );
};

export { OtherDataForm };
