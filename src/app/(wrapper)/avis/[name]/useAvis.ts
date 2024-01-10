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

export const useAvis = () => {
  const params = useParams();
  const name = params.name;
  const { setData } = useContext(ApplicationContext);

  const [form, setForm] = useState<AvisFormViewType | undefined | null>();
  const mutation = useMutation(giveAvis);
  const viewMutation = useMutation(getView);

  async function getView() {
    axios.get(`/avis/views?name=${name}`);
  }

  async function giveAvis(obj: any) {
    const res = await axios.post("/avis", obj);
  }

  useEffect(() => {
    axios
      .get(`/avis/views?name=${name}`)
      .then((res) => {
        if (res.data.view) {
          console.log("res.data.view", res.data.view);
          setData({
            leftComponent: res.data.view.left,
            metaData: {
              description: "Powered by chillo.tech",
              title: "Avis",
            },
          });
          setForm(res.data.view.right);
        }
      })
      .catch((err) => {
        console.log("err", err);
      });
  }, [name, setData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(avisSchema),
  });

  const onSubmitHandler = (data: any) => {
    mutation.mutateAsync(data).then(() => {
      mutation.reset();
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
  };
};
