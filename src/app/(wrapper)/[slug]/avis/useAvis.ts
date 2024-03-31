"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { ApplicationContext } from "../../../../context/ApplicationContext";
import { avisSchema } from "./avis-schema";

export const useAvis = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;
  const { setData } = useContext(ApplicationContext);
  const [selected, setSelected] = useState<number | null | undefined>();

  const setSelectedFactory = (i: number) => () => setSelected(i);

  const mutation = useMutation(giveAvis);
  const viewQuery = useQuery("formation", getFormation);

  async function getFormation() {
    const response = await axios.get(
      `/api/backend/avis/formation?slug=${slug}`
    );
    if (response.data.formation[0].titre)
      setData({
        leftComponent: {
          description:
            response.data.formation[0]?.apres ||
            response.data.formation[0]?.description ||
            "",
          title: response.data.formation[0]?.titre || "",
        },
        metaData: {
          description: "Powered by chillo.tech",
          title: "Avis",
        },
      });
    return response.data.formation;
  }

  async function giveAvis(data: any) {
    await axios.post("/api/backend/avis", data);
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
    mutation.mutateAsync({
      slug,
      session_id:
        (Array.isArray(viewQuery.data[0]?.sessions) &&
          viewQuery.data[0].sessions?.at(-1)?.Session_id) ||
        0,
      ...data,
      note: parseInt(data.note),
    });
  };

  const resetAll = () => {
    setSelected(undefined);
    reset();
    mutation.reset();
  };

  const onInvalid = (errors: any) => console.error(errors);

  const onSubmit = handleSubmit(onSubmitHandler, onInvalid);

  const reloadPage = () => {
    setSelected(undefined);
    router.refresh();
  };
  return {
    register,
    errors,
    onSubmit,
    mutation,
    setSelectedFactory,
    selected,
    viewQuery,
    resetAll,
    reloadPage,
  };
};
