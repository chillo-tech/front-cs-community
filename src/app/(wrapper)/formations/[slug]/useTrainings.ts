"use client";

import { ApplicationContext } from "@/context/ApplicationContext";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { trainingsSchema } from "./trainings-schema";

export const useTrainings = ({ slug } : { slug: string }) => {
  const router = useRouter();
  const { setData } = useContext(ApplicationContext);
  const mutation = useMutation(save);
  const viewQuery = useQuery("formation", getItem);
  const parts = slug.split("-");
  const id: string = parts[parts.length - 1];
  async function getItem() {
    const {data: {data}} = await axios.get(
      `/api/backoffice/trainings/${id}?fields=*,planings.*,images.*` //,plannings.*.*,images.*` //,image.*,plannings.*,channels.channel_id.*
    );

    if (data.title) {-
      setData({
        leftComponent: {
          description: data.description || data.description_title,
          title: data.title || "",
        },
        metaData: {
          description: "Webinaire developpé par Chillo",
          title: data?.title || "Webinaire",
        },
      });
    }
    return data;
  }

  async function save(data: any) {
    await axios.post(`/api/backend/trainings/${id}`, data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
    setValue
  } = useForm({
    resolver: yupResolver(trainingsSchema),
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
    setValue,
    register,
    errors,
    onSubmit,
    mutation,
    viewQuery,
    resetAll,
    reloadPage,
  };
};
