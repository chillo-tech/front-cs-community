import formStyles from "@/styles/Form.module.css";
import classNames from "classnames";
import { useContext } from "react";
import { context } from "../context";
const OtherDataForm = () => {
  const {
    setValue,
    radioSelectedValue,
    setRadioSelectedValue,
    register,
    view,
    channels,
  } = useContext(context);
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
        <div className="space-y-1">
          {[
            ...channels,
            {
              id: 0,
              title: "Autre (précisez)",
            },
          ].map(({ id, title }, index) => {
            const value = id.toString();
            return (
              <div className="space-y-3" key={`${value}-${index}`}>
                <p
                  className={`flex w-full cursor-pointer items-center justify-between px-3 gap-2 rounded-lg border border-gray-200 shadow-sm  transition-all hover:bg-green-300 hover:text-white ${classNames(
                    {
                      "hover:bg-green-500 bg-green-500 text-white":
                        value === radioSelectedValue,
                    }
                  )}`}
                  onClick={() => {
                    setValue("channel", value);
                    if (value === "0") {
                      setValue("channel", "");
                    }
                    setRadioSelectedValue(value);
                  }}
                >
                  <label
                    className="leading-0 relative top-[2px] cursor-pointer p-2"
                    htmlFor={`${value}-${index}`}
                  >
                    {title}
                  </label>
                  {id !== 0 && (
                    <input
                      type="radio"
                      checked={radioSelectedValue === value}
                      id={`${value}-${index}`}
                    />
                  )}
                </p>
                {value === "0" && radioSelectedValue === "0" && (
                  <>
                    <input
                      className={`${formStyles.form_control__input} shrink-0 !p-[8px] !py-[12px] focus:border-indigo-500 focus-visible:outline-indigo-500`}
                      placeholder="Veuillez preciser"
                      {...register("channel")}
                    />
                  </>
                )}
              </div>
            );
          })}
        </div>
      </fieldset>
    </>
  );
};

export { OtherDataForm };
