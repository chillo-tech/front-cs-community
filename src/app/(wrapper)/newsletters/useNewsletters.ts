"use client";

import { axiosInstance } from "@/utils";
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
    const res = await axiosInstance.post("/newsletters/register", obj);
  }

  useEffect(() => {
    setData({
      leftComponent: {
        description: `Sentez vous libre de remplir ce formulaire, et nous vous tiendrons
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

  const resetAll = () => {
    reset();
    mutation.reset();
  };

  const onSubmitHandler = (data: any) => {
    mutation.mutateAsync(data);
  };

  const onInvalid = (errors: any) => console.error(errors);

  const onSubmit = handleSubmit(onSubmitHandler, onInvalid);

  return {
    register,
    errors,
    onSubmit,
    mutation,
    resetAll,
  };
};
