import styles from "@/styles/SignIn.module.css";
import { IWebinaireView } from "@/types";
import { getHumanDate } from "@/utils";
import React from "react";

const Aside = ({ data }: { data: IWebinaireView | undefined }) => {
  return data ? (
    <aside className={`w-full shrink-0 my-3 space-y-5 pr-0 lg:pr-3 `}>
      <h1
        className={`${styles.form__title} text-center !text-2xl !font-bold lg:!text-left pb-0 pt-4 lg:!text-4xl`}
      >
        {data.title}
      </h1>
      <div>
        <div
          className={`${styles.form_control__label} !text-center font-light lg:!text-left pt-0 pb-8 [&>ul]:list-disc [&>ul]:my-2 [&>ul]:px-4 [&>p]:my-2`}
          dangerouslySetInnerHTML={{ __html: data.description }}
        />
        {data && data.planings ? (
          <div className="flex flex-wrap gap-3 items-center my-2">
            <p className="rounded-[35px] bg-gray-300 py-1 px-3">
              {getHumanDate(new Date(data.planings.at(-1)?.start_date || ""))} à{" "}
              {data.planings.at(-1)?.start_hour.slice(0, -3) || ""}
            </p>
            <p className="rounded-[35px] bg-gray-300 py-1 px-3">
              {getHumanDate(new Date(data.planings.at(-1)?.end_date || ""))} à{" "}
              {data.planings.at(-1)?.end_hour.slice(0, -3) || ""}
            </p>
          </div>
        ) : null}
      </div>
    </aside>
  ) : null;
};

export default Aside;
