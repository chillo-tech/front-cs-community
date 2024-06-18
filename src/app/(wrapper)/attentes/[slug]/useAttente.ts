"use client";

import { ApplicationContext } from "@/context/ApplicationContext";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { attenteSchema } from "./attentes-schema";

export const useAttente = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;
  const { setData } = useContext(ApplicationContext);
  const mutation = useMutation(giveAvis);
  const viewQuery = useQuery("formation", getItem);

  async function getItem() {
    const response = await axios.get(
      `/api/backoffice/item/?filter[slug][_eq]=${slug}`
    );
    if (response.data.data[0].title)
      setData({
        leftComponent: {
          description: response.data.data[0]?.description || "",
          title: response.data.data[0]?.title || "",
        },
        metaData: {
          description: "Powered by chillo.tech",
          title: "Avis",
        },
      });
    return response.data.data;
  }

  async function giveAvis(data: any) {
    await axios.post("/api/backend/attentes", data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(attenteSchema),
  });

  const onSubmitHandler = (data: any) => {
    mutation.mutateAsync({
      itemSlug: slug,
      ...data,
      appName: "front-cs-community",
    });
  };

  const resetAll = () => {
    reset();
    mutation.reset();
  };

  const onInvalid = (errors: any) => console.error(errors);

  const onSubmit = handleSubmit(onSubmitHandler, onInvalid);

  const reloadPage = () => {
    router.refresh();
  };
  return {
    register,
    errors,
    onSubmit,
    mutation,
    viewQuery,
    resetAll,
    reloadPage,
  };
};
