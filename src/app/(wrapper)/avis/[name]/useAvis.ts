"use client";

import { axios } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { ApplicationContext } from "../../ApplicationContext";
import { avisSchema } from "./avis-schema";
import { DEFAULT_FORM } from "./constants";

export const useAvis = () => {
  const router = useRouter();
  const params = useParams();
  const name = params.name;
  const { setData } = useContext(ApplicationContext);
  const [selected, setSelected] = useState<number | null | undefined>();

  const setSelectedFactory = (i: number) => () => setSelected(i);

  const mutation = useMutation(giveAvis);
  const viewQuery = useQuery("view", getView);

  async function getView() {
    const res = await axios.get(`/avis/views?name=${name}`);
    setData({
      leftComponent: res.data.view.left || DEFAULT_FORM.left,
      metaData: {
        description: "Powered by chillo.tech",
        title: "Avis",
      },
    });
    return res.data;
  }

  async function giveAvis(obj: any) {
    axios.post("/avis", obj);
  }

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
    setSelectedFactory,
    selected,
    viewQuery,
  };
};
