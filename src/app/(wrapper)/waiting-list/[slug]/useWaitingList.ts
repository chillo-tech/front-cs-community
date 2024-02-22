"use client";

import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosError, isAxiosError } from "axios";
import { useParams, useRouter } from "next/navigation";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";
import { ApplicationContext } from "@/app/(wrapper)/ApplicationContext";
import { waitingListSchema } from "./wl-schema";

export const useWaitingList = () => {
  const router = useRouter();
  const params = useParams();
  const slug = params?.slug;
  const { setData } = useContext(ApplicationContext);

  const mutation = useMutation(subscribeToWaitingList);
  const viewQuery = useQuery({
    queryKey: ["waiting-list"],
    queryFn: getWaitingList,
    retry: false,
  });

  async function getWaitingList() {
    try {
      const response = await axios.get(
        `/api/backend/waiting-list/formation/?slug=${slug}`
      );
      if (response.data.formation) {
        setData({
          leftComponent: {
            description: `Inscrivez-vous dès maintenant sur la liste d'attente et bénéficiez d'une réduction exclusive EARLY-BIRD dès que le cours sera disponible.`,
            title: response.data.formation.titre || "Formation de chillo.tech",
          },
          metaData: {
            description: "Powered by chillo.tech",
            title: "Liste d'attente",
          },
        });
        return response.data.formation;
      } else {
        // router.push("not-found");
        setData({
          leftComponent: {
            description: `La formation que vous cherchez semble ne pas exister. Vous pouvez nous contacter en cliquant sur le bouton vert en bat de page!`,
            title: "Ressource inexistante",
          },
          metaData: {
            description: "Powered by chillo.tech",
            title: "Ressource inexistante",
          },
        });
        return null;
      }
    } catch (error) {
      if (isAxiosError(error) && error.response?.status === 404) {
        setData({
          leftComponent: {
            description: `La formation que vous cherchez semble ne pas exister. Vous pouvez nous contacter en cliquant sur le bouton vert en bat de page!`,
            title: "Ressource inexistante",
          },
          metaData: {
            description: "Powered by chillo.tech",
            title: "Ressource inexistante",
          },
        });
      }
      throw error;
    }
  }

  async function subscribeToWaitingList(data: any) {
    await axios.post("/api/backend/waiting-list/subscribe", data);
  }

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(waitingListSchema),
  });

  const onSubmitHandler = (data: any) => {
    if (typeof slug !== "string" && !(slug instanceof String)) return;
    mutation.mutateAsync({
      formationId: parseInt(slug.split("-").at(-1) || ""),
      ...data,
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
  const backToHome = () => {
    router.push(process.env.NEXT_PUBLIC_APP_URL || "/");
  };
  return {
    register,
    errors,
    onSubmit,
    mutation,
    viewQuery,
    resetAll,
    reloadPage,
    backToHome,
  };
};
