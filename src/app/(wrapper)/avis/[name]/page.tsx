"use client";

import {
  AvisFormFieldGenerator,
  FormSubmitResponder,
  FormWrapper,
  SubmitButton,
} from "@/components";
import { useAvis } from "./useAvis";

const Home = () => {
  const {
    register,
    onSubmit,
    errors,
    mutation,
    setSelectedFactory,
    selected,
    viewQuery,
  } = useAvis();
  return (
    <div className="container px-5 py-5 ">
      {(viewQuery.status === "loading" || viewQuery.status === "error") && (
        <div
          className={
            " bg-slate-200 py-3 px-3 md:px-10 md:text-lg rounded-md text-blue-900"
          }
        >
          <FormSubmitResponder
            successMessage={`Chargement du formulaire...`}
            errorMessage={`Quelque chose a mal tourne! Il semblerait que ce sujet n'existe pas. Vous pouvez nous contacter en
        cliquant sur le boutton whatsapp en bas a votre gauche.`}
            isError={viewQuery.status === "error"}
            isSuccess={viewQuery.status === "loading"}
          />
        </div>
      )}
      {/* {viewQuery.status === "loading" && <p>Loading...</p>}
      {viewQuery.status === "error" && <p>Error when fetching form data</p>} */}
      {viewQuery.status === "success" && (
        <FormWrapper onSubmit={onSubmit}>
          {mutation.isError || mutation.isSuccess ? (
            <FormSubmitResponder
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

              <AvisFormFieldGenerator
                errors={errors}
                fields={viewQuery.data?.view.right?.fields}
                register={register}
                setSelectedFactory={setSelectedFactory}
                selected={selected}
              />

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
