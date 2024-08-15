"use client";

import { Analytics, Message, SubmitButton } from "@/components";
import { ScaleLoader } from "react-spinners";
import { useTrainings } from "./useTrainings";
import fr from "react-phone-input-2/lang/fr.json";
import styles from "@/styles/SignIn.module.css";
import formStyles from "@/styles/Form.module.css";
import PhoneInput from "react-phone-input-2";
import { useState } from "react";
import "react-phone-input-2/lib/style.css";

function Page({ params: { slug } }: { params: { slug: string } }) {
  const {
    register,
    onSubmit,
    setValue,
    errors,
    mutation,
    viewQuery,
    resetAll,
    reloadPage,
  } = useTrainings({ slug });
  const [phoneNumber, setPhoneNumber] = useState("");
  return (
    <>
      <div className="container px-5 py-5 ">
        {(viewQuery.status === "loading" || viewQuery.status === "error") && (
          <div
            className={
              " bg-slate-200 py-3 px-3 md:px-10 md:text-lg rounded-md text-blue-900"
            }
          >
            {viewQuery.status === "loading" ? (
              <div className="flex top-0 left-0 z-50 justify-center items-center h-full w-full">
                <ScaleLoader color="rgb(30,50,138)" />
              </div>
            ) : (
              <Message
                isError={true}
                isSuccess={false}
                reloadForm={reloadPage}
                reloadText="Recharger la page"
              />
            )}
          </div>
        )}

        {viewQuery.status === "success" &&
          ((viewQuery.data && !Array.isArray(viewQuery.data)) ||
            (Array.isArray(viewQuery.data) && viewQuery.data.length > 0)) && (
            <form
              className={
                "flex relative flex-col gap-2 font-light infos my-3 bg-slate-200 py-3 rounded-mdd px-3 md:px-10 md:text-lg rounded-md"
              }
              onSubmit={onSubmit}
            >
              {mutation.isError || mutation.isSuccess ? (
                <Message
                  reloadForm={resetAll}
                  isError={mutation.isError}
                  isSuccess={mutation.isSuccess}
                />
              ) : (
                <>
                  {mutation.isLoading ? (
                    <div className="flex absolute top-0 left-0 bg-[rgba(30,50,138,.3)] z-50 justify-center items-center h-full w-full">
                      <ScaleLoader color="rgb(30,50,138)" />
                    </div>
                  ) : null}
                  <div className="">
                    <p className="mb-2 text-2xl mt-2">
                      Télécharger le programme de la formation<br />
                      <span className="font-black uppercase text-2xl text-bold">
                        {viewQuery?.data?.title}
                      </span>
                    </p>
                    <div
                      className={`${styles.form_control__label} !text-center font-light lg:!text-left pt-0 [&>ul]:list-disc [&>ul]:my-2 [&>ul]:px-4 [&>p]:my-2`}
                      dangerouslySetInnerHTML={{
                        __html: viewQuery?.data.description_title,
                      }}
                    />
                  </div>

                  <div className={formStyles.form_control}>
                    <label
                      htmlFor={`prenom`}
                      className={formStyles.form_control__label}
                    >
                      <span className={formStyles.form_control__label__first}>
                        Votre prénom
                      </span>
                    </label>
                    <input
                      type="text"
                      id={`prenom`}
                      className={formStyles.form_control__input}
                      placeholder={"Veuillez entrer votre prénom"}
                      {...register("lastName")}
                    />
                    {errors.lastName && (
                      <p className={formStyles.form_control__error}>
                        Veuillez indiquer votre prénom{" "}
                      </p>
                    )}
                  </div>

                  {/* nom */}
                  <div className={formStyles.form_control}>
                    <label
                      htmlFor={`nom`}
                      className={formStyles.form_control__label}
                    >
                      <span className={formStyles.form_control__label__first}>
                        Votre nom
                      </span>
                    </label>
                    <input
                      type="text"
                      id={`nom`}
                      className={formStyles.form_control__input}
                      placeholder={"Veuillez entrer votre nom"}
                      {...register("firstName")}
                    />
                    {errors.firstName && (
                      <p className={formStyles.form_control__error}>
                        Veuillez indiquer votre nom{" "}
                      </p>
                    )}
                  </div>

                  {/* email */}
                  <div className={formStyles.form_control}>
                    <label
                      htmlFor={`email`}
                      className={formStyles.form_control__label}
                    >
                      <span className={formStyles.form_control__label__first}>
                        Votre email
                      </span>
                    </label>
                    <input
                      type="text"
                      id={`email`}
                      className={formStyles.form_control__input}
                      placeholder={"Veuillez entrer votre email"}
                      {...register("email")}
                    />
                    {errors.email && (
                      <p className={formStyles.form_control__error}>
                        Veuillez indiquer votre email{" "}
                      </p>
                    )}
                  </div>

                  {/* numero telephone */}
                  <div className={`${formStyles.form_control}`}>
                    <label
                      htmlFor={`numero_telephone`}
                      className={formStyles.form_control__label}
                    >
                      <span className={formStyles.form_control__label__first}>
                        Votre numéro de téléphone
                      </span>
                    </label>
                    <PhoneInput
                      localization={fr}
                      country={"fr"}
                      onBlur={register("phoneNumber").onBlur}
                      value={phoneNumber}
                      inputClass={"!h-auto !w-full"}
                      containerClass={formStyles.form_control__input}
                      onChange={(value, data) => {
                        if (!("dialCode" in data)) return;
                        setPhoneNumber(
                          `${value ? data.dialCode : ""}${value.slice(
                            data.dialCode.length
                          )}`
                        );
                        setValue("phoneIndex", `+${data.dialCode}`);
                        setValue(
                          "phoneNumber",
                          value.slice(data.dialCode.length)
                        );
                      }}
                      disabled={mutation.isLoading}
                    />
                    {errors.phoneNumber && (
                      <p className={formStyles.form_control__error}>
                        Veuillez indiquer votre numéro de téléphone{" "}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col text-xl my-3">
                    <SubmitButton text="Transmettre" />
                  </div>
                  <p className="text-center">
                    Nous ne traitons les données recueillies que pour faciliter
                    la prise de contact.
                  </p>
                </>
              )}
            </form>
          )}
      </div>
      {process.env.NEXT_PUBLIC_AVIS_ANALYTICS && (
        <Analytics ga_id={process.env.NEXT_PUBLIC_AVIS_ANALYTICS} />
      )}
    </>
  );
}

export default Page;
