"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useContext, useEffect } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ApplicationContext } from "../ApplicationContext";
import { newslettersSchema } from "./newsletters-schema";

export const useNewsletters = () => {
  const { setData } = useContext(ApplicationContext);

  const mutation = useMutation(newsletters);
  async function newsletters(obj: any) {
    const res = await axios.post("/api/backend/newsletters/register", obj);
  }

  useEffect(() => {
    setData({
      leftComponent: {
        description: `Rejoignez plus de 10 000 apprenants et professionnels passionnés du code.  les ingénieurs font confiance à nos contenus !`,
        title: `Inscrivez vous à notre newsletter`,
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
