"use client";

import { axios } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { newslettersSchema } from "./newsletters-schema";
import { ApplicationContext } from "../ApplicationContext";

export const useNewsletters = () => {
  const [submissionMessage, setSubmissionMessage] = useState<{
    canShow: boolean;
    message: string;
  }>({
    canShow: false,
    message: "",
  });
  const { setData } = useContext(ApplicationContext);

  const mutation = useMutation(registerNewsletters);
  async function registerNewsletters(obj: any) {
    try {
      const res = await axios.post("/newsletters/register", obj);
      setSubmissionMessage((prev) => {
        return {
          canShow: true,
          message:
            "Votre requete a été prise en compte, vous serez notifiés par mail sous peu.",
        };
      });
    } catch (err: any) {
      setSubmissionMessage((prev) => {
        return {
          canShow: true,
          message:
            err?.response?.data?.message ||
            "Quelque chose ne c'est pas bien passé, Vous pouvez cliquer sur le boutton whatsapp pour nous contacter",
        };
      });
    } finally {
      setTimeout(() => {
        setSubmissionMessage((prev) => {
          return {
            canShow: false,
            message: "",
          };
        });
      }, 5000);
    }
  }

  useEffect(() => {
    setData({
      leftComponent: {
        desc: `Sentez vous libre de remplir ce formulaire, et nous vous tiendrons
        au courant de toutes les nouveautes`,
        title: `Enregistrez vous à nos newsletters`,
      },
      metaData: {
        description: "Powered by chillo.tech",
        title: "Newsletters",
      },
    });
  }, [setData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(newslettersSchema),
  });

  const onSubmitHandler = (data: any) => {
    mutation.mutateAsync(data);
    reset();
  };

  const onInvalid = (errors: any) => console.error(errors);

  const onSubmit = handleSubmit(onSubmitHandler, onInvalid);

  return {
    register,
    errors,
    onSubmit,
    submissionMessage,
    mutation,
  };
};
