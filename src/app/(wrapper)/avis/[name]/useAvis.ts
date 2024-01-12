"use client";

import { AvisFormViewType } from "@/types";
import { axios } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useContext, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation } from "react-query";
import { ApplicationContext } from "../../ApplicationContext";
import { avisSchema } from "./avis-schema";
import { useParams } from "next/navigation";
import { DEFAULT_FORM } from "./constants";

export const useAvis = () => {
  const params = useParams();
  const name = params.name;
  const { setData } = useContext(ApplicationContext);
  const [selected, setSelected] = useState<number | null | undefined>();

  const setSelectedFactory = (i: number) => () => setSelected(i);

  const [form] = useState<AvisFormViewType | undefined | null>(
    DEFAULT_FORM.right
  );
  const mutation = useMutation(giveAvis);

  async function giveAvis(obj: any) {
    axios.post("/avis", obj);
  }

  useEffect(() => {
    setData({
      leftComponent: DEFAULT_FORM.left,
      metaData: {
        description: "Powered by chillo.tech",
        title: "Avis",
      },
    });
  }, [setData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(avisSchema),
  });

  const onSubmitHandler = (data: any) => {
    console.log("data", data);
    mutation.mutateAsync({ subject: name, ...data }).then(() => {
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
    form,
    setSelectedFactory,
    selected,
  };
};
