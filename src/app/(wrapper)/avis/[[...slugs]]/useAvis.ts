"use client";

import { ApplicationContext } from "@/context/ApplicationContext";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { avisSchema } from "./avis-schema";

export const useAvis = () => {
  const router = useRouter();
  const params = useParams();
  const slug = Array.isArray(params?.slugs) ? params?.slugs[0] : undefined;
  const sessionSlug = Array.isArray(params?.slugs)
    ? params?.slugs[1]
    : undefined;
  const { setData } = useContext(ApplicationContext);

  const mutation = useMutation(giveAvis);
  const viewQuery = useQuery({
    queryKey: "formation",
    queryFn: getFormation,
    onError: (err) => console.log("err", err),
  });

  async function getFormation() {
    const response = await axios.get(
      `/api/backend/avis/trainings?${slug ? `formationSlug=${slug}&` : ""}${
        sessionSlug ? `sessionSlug=${sessionSlug}` : ""
      }`
    );

    if (
      (slug &&
        (!Array.isArray(response.data.trainings) ||
          !response.data.trainings[0])) ||
      (sessionSlug && !response.data.session)
    ) {
      router.replace('/404')
    }

    setData({
      leftComponent: {
        description:
          response.data.trainings[0]?.abstract ||
          response.data.trainings[0]?.subtitle ||
          "Vous pouvez via ce formulaire a droite nous donner votre avis.",
        title: response.data.trainings[0]?.title || "Votre avis compte!",
      },
      metaData: {
        description: "Powered by chillo.tech",
        title: "Avis",
      },
    });

    return response.data.trainings[0];
  }

  async function giveAvis(data: any) {
    await axios.post("/api/backend/avis", data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
    watch,
  } = useForm({
    resolver: yupResolver(avisSchema),
  });

  const note = watch("note");

  const onSubmitHandler = (data: any) => {
    mutation.mutateAsync({
      training_slug: slug,
      session_slug: sessionSlug,
      ...data,
      note: data.note ? parseInt(data.note) : undefined,
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
    note,
  };
};
