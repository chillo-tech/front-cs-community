"use client";
import { axios } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { suggestionSchema } from "./suggestion-schema";
import { wrapperContext } from "../useLayout";

function useSuggestion() {
  const [submissionMessage, setSubmissionMessage] = useState<{
    canShow: boolean;
    message: string;
    variant: "success" | "failed";
  }>({
    canShow: false,
    message: "",
    variant: "success",
  });
  const { data, setData } = useContext(wrapperContext);
  const mutation = useMutation(postSuggestion, {});

  async function postSuggestion(obj: any) {
    try {
      const res = await axios.post("/suggestions", obj);
      setSubmissionMessage((prev) => {
        return {
          canShow: true,
          message:
            "Votre requete a été prise en compte, vous serez notifiés par mail sous peu.",
          variant: "success",
        };
      });
    } catch (err: any) {
      setSubmissionMessage((prev) => {
        return {
          canShow: true,
          message:
            err?.response?.data?.message ||
            "Quelque chose ne c'est pas bien passé, Vous pouvez cliquer sur le boutton whatsapp pour nous contacter",
          variant: "success",
        };
      });
    } finally {
      setTimeout(() => {
        setSubmissionMessage((prev) => {
          return {
            canShow: false,
            message: "",
            variant: "success",
          };
        });
      }, 5000);
    }
  }

  useEffect(() => {
    setData({
      leftComponent: {
        desc: `Sentez vous libre de remplir ce formulaire, et je ferais de mon
        mieux pour creer une video a propos du sujet que vous proposez`,
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

  const onSubmitHandler = (data: any) => {
    mutation.mutateAsync({
      ...data,
      author: { ...data.author, tag: [data.author.tag] },
    });
    reset();
  };

  const onInvalid = (errors: any) => console.error(errors);

  const handleSuggestionSubmit = handleSubmit(onSubmitHandler, onInvalid);

  return {
    register,
    errors,
    handleSuggestionSubmit,
    submissionMessage,
  };
}

export default useSuggestion;
