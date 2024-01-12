"use client";

import { axios } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { newslettersSchema } from "./newsletters-schema";
import { ApplicationContext } from "../ApplicationContext";

export const useNewsletters = () => {
  const { setData } = useContext(ApplicationContext);

  const mutation = useMutation(newsletters);
  async function newsletters(obj: any) {
    const res = await axios.post("/newsletters/register", obj);
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
    mutation.mutateAsync(data).then(() => {
      // mutation.reset();
    });
    reset();
  };

  const onInvalid = (errors: any) => console.error(errors);

  const onSubmit = handleSubmit(onSubmitHandler, onInvalid);

  return {
    register,
    errors,
    onSubmit,
    mutation,
  };
};
