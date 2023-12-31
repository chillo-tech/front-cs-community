"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useMutation } from "react-query";
import { formSchema } from "./formSchema";
import { FormEvent, useContext, useEffect } from "react";
import axios from "./axios";
import { HomeContext } from "@/app/layout";

export const useFn = () => {
  const mutation = useMutation(registerNewsletters, {
    onSettled: () => {
      console.log("fait");
    },
  });

  async function registerNewsletters(obj: any) {
    try {
      const res = await axios.post("/newsletters/register", obj);
      toast.success("success, you will recieve a confirmation via email");
    } catch (err: any) {
      console.log("err", err);
      toast.error(err?.response?.data?.message || "something went wrong");
    }
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const onSubmitHandler = (data: any) => {
    console.log({ data });
    const tempObj = {
      name: data.nom,
      email: data.email,
    };

    console.log("tempObj", tempObj);

    mutation.mutateAsync(tempObj);

    // reset();
  };

  const onInvalid = (errors: any) => console.error(errors);

  const reactHookSubmitter = handleSubmit(onSubmitHandler, onInvalid);

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    await reactHookSubmitter();
    console.log("submitted");
    reset()
  };
  return {
    register,
    errors,
    onSubmit,
  };
};

export const useHome = () => {
  const homeContext = useContext(HomeContext);
  useEffect(() => {
    if (homeContext.setValue) {
      homeContext.setValue({
        metadata: {
          title: "newsletters",
          description: "newsletter module of chillo.tech",
        },
        descriptions: [],
      });
    }
  }, []);
};
