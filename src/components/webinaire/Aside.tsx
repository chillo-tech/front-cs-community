import styles from "@/styles/SignIn.module.css";
import { IWebinaireView } from "@/types";
import { getHumanDate } from "@/utils";
import React from "react";

const Aside = ({ data }: { data: IWebinaireView | undefined }) => {
  return data ? (
    <aside className={`w-full shrink-0 my-3 space-y-5 pr-0 lg:pr-3`}>
      <h1
        className={`${styles.form__title} text-center !text-2xl !font-bold lg:!text-left pb-0 pt-4 lg:!text-4xl`}
      >
        {data.title}
      </h1>
      <div>
        <div
          className={`${styles.form_control__label} !text-center font-light lg:!text-left pt-0 pb-8`}
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        <div className="flex flex-wrap gap-3 items-center my-2">
          <p className="rounded-[35px] bg-gray-300 py-1 px-3">
            debut:{" "}
            {getHumanDate(new Date(data.plannings.at(-1)?.startDate || ""))} à{" "}
            {data.plannings.at(-1)?.startHour.slice(0, -3) || ""}
          </p>
          <p className="rounded-[35px] bg-gray-300 py-1 px-3">
            fin: {getHumanDate(new Date(data.plannings.at(-1)?.endDate || ""))}{" "}
            à {data.plannings.at(-1)?.endHour.slice(0, -3) || ""}
          </p>
          <p className="rounded-[35px] bg-gray-300 py-1 px-3">Google Meet</p>
        </div>
      </div>
    </aside>
  ) : null;
};

export default Aside;
