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
    form,
    setSelectedFactory,
    selected,
  } = useAvis();
  return (
    <div className="container px-5 py-5 ">
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
              <p className="mb-2 font-black text-2xl mt-2">{form?.title}</p>
              <p>{form?.desc}</p>
            </div>

            <AvisFormFieldGenerator
              errors={errors}
              fields={form?.fields}
              register={register}
              setSelectedFactory={setSelectedFactory}
              selected={selected}
            />

            <div className="flex flex-col text-xl my-3">
              <SubmitButton text="Transmettre" />
            </div>
            <p className="text-center">{form?.bottom}</p>
          </>
        )}
      </FormWrapper>
    </div>
  );
};

export default Home;
