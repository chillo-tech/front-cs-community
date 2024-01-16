"use client";

import {
  Message,
  FormWrapper,
  SubmitButton,
  AvisFormInputWrapper,
} from "@/components";
import { useAvis } from "./useAvis";
import { avisFieldSwitcher } from "@/utils";
import { Key } from "react";

const Home = () => {
  const {
    register,
    onSubmit,
    errors,
    mutation,
    setSelectedFactory,
    selected,
    viewQuery,
    resetAll,
  } = useAvis();
  return (
    <div className="container px-5 py-5 ">
      {(viewQuery.status === "loading" || viewQuery.status === "error") && (
        <div
          className={
            " bg-slate-200 py-3 px-3 md:px-10 md:text-lg rounded-md text-blue-900"
          }
        >
          <Message
            reloadForm={resetAll}
            isError={viewQuery.status === "error"}
            isSuccess={viewQuery.status === "loading"}
          />
        </div>
      )}
      {viewQuery.status === "success" && (
        <FormWrapper onSubmit={onSubmit}>
          {mutation.isError || mutation.isSuccess ? (
            <Message
              reloadForm={resetAll}
              successMessage={`Votre requete a bien ete prise en compte, vous serez notifies par
              mail`}
              errorMessage={`Quelque chose a mal tourne, vous pouvez nous contacter en
              cliquant sur le boutton whatsapp en bas a votre gauche.`}
              isError={mutation.isError}
              isSuccess={mutation.isSuccess}
            />
          ) : (
            <>
              <div className="">
                <p className="mb-2 font-black text-2xl mt-2">
                  {viewQuery.data?.view.right?.title}
                </p>
                <p>{viewQuery.data?.view.right?.desc}</p>
              </div>

              {viewQuery.data?.view.right?.fields?.map((el: any, i: number) => {
                return (
                  <AvisFormInputWrapper
                    key={i}
                    errors={errors}
                    label={el.label}
                    name={el.name}
                  >
                    {avisFieldSwitcher({
                      i,
                      setSelectedFactory,
                      el,
                      register,
                      selected,
                    })}
                  </AvisFormInputWrapper>
                );
              })}

              <div className="flex flex-col text-xl my-3">
                <SubmitButton text="Transmettre" />
              </div>
              <p className="text-center">
                {viewQuery.data?.view.right?.bottom}
              </p>
            </>
          )}
        </FormWrapper>
      )}
    </div>
  );
};

export default Home;
