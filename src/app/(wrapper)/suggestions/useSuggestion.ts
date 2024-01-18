import  axios from "axios";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { suggestionSchema } from "./suggestion-schema";
import { ApplicationContext } from "../ApplicationContext";

function useSuggestion() {
  const { setData } = useContext(ApplicationContext);
  const mutation = useMutation(postSuggestion);

  async function postSuggestion(obj: any) {
    await axios.post("/api/backend/suggestions", obj);
  }

  useEffect(() => {
    setData({
      leftComponent: {
        description: `Merci de remplir notre formulaire, votre suggestion sera dans la liste des nos sujets à traiter`,
        title: `Avez vous une idee de video`,
      },
      metaData: {
        description: "Powered by chillo.tech",
        title: "Suggestions",
      },
    });
  }, [setData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(suggestionSchema),
  });

  const resetAll = () => {
    reset();
    mutation.reset();
  };

  const onSubmitHandler = (data: any) => {
    mutation.mutateAsync({
      ...data,
      author: { ...data.author, tag: [data.author.tag] },
    });
  };

  const onInvalid = (errors: any) => console.error(errors);

  const handleSuggestionSubmit = handleSubmit(onSubmitHandler, onInvalid);

  return {
    register,
    errors,
    handleSuggestionSubmit,
    mutation,
    resetAll,
  };
}

export default useSuggestion;
