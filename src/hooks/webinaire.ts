"use client";
import { schema } from "@/components/webinaire/form/schama";
import { IChannel, IWebinaireView } from "@/types";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useForm, useWatch } from "react-hook-form";
import { useMutation, useQuery } from "react-query";

const useWebinaire = () => {
  const router = useRouter();

  const slug =
    typeof window !== "undefined"
      ? window.location.pathname.split("/").at(-1)
      : "";
  const fetchView = async () => {
    const id = parseInt((slug as string).split("-").at(-1) || "");
    if (isNaN(id)) {
      throw new Error("View not found : id is not a number");
    }
    const {
      data: { data: view },
    } = await axios.get(
      `/api/backoffice/webinaire/${id}/?fields=*,image.*,plannings.*,channels.channel_id.*`
    );


    if (!view || view.slug !== slug) {
      throw new Error("View not found : provided slug doesnt match");
    }

    return view as IWebinaireView;
  };

  const viewQuery = useQuery({
    queryKey: ["vue-webinaire", 1],
    queryFn: fetchView,
    retry: 10,
    refetchOnWindowFocus: false,
    onError: () => {
      router.push("/404");
    },
  });
  return { viewQuery };
};

const useWrapper = ({ view }: { view: IWebinaireView }) => {
  const [errorMessage, setErrorMessage] = useState(
    "Une erreur est survenue, nous allons la résoudre sous peu"
  );

  const fetchView = async () => {
    const {
      data: { data: channels },
    } = await axios.get(
      `/api/backoffice/channel/?filter[status][_eq]=published`
    );

    return channels as IChannel[];
  };

  const viewQuery = useQuery({
    queryKey: ["vue-channels", 1],
    queryFn: fetchView,
    retry: 10,
    refetchOnWindowFocus: false,
  });

  const [phoneNumber, setPhoneNumber] = useState("");

  const [formPageIndex, setFormPageIndex] = useState(0);

  const answerWebinaire = (data: any) => {
    return axios.post(
      `/api/backend/webinaire/${view.id}/planning/${view.plannings.at(-1)?.id}`,
      data
    );
  };

  const mutation = useMutation({
    mutationFn: answerWebinaire,
    onError: (error) => {
      const { response } = error as AxiosError;
      const { data, status } = response as any;
      if (String(status).charAt(0) === "4" && data.message) {
        setErrorMessage(data.message);
      }
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const channel = Number(watch("channel"));

  const onSubmit = (data: any) => {
    mutation.mutate(data);
  };

  useEffect(() => {
    if (
      (errors.email ||
        errors.phoneIndex ||
        errors.phoneNumber ||
        errors.lastName ||
        errors.firstName) &&
      formPageIndex !== 0
    ) {
      setFormPageIndex(0);
    }
  }, [errors, formPageIndex]);

  const handleSubmitFn = handleSubmit(onSubmit);
  return {
    mutation,
    getValues,
    channel,
    register,
    handleSubmitFn,
    errors,
    setValue,
    formPageIndex,
    setFormPageIndex,
    errorMessage,
    setErrorMessage,
    phoneNumber,
    setPhoneNumber,
    view,
    channels: viewQuery.data || [],
  };
};

export { useWebinaire, useWrapper };
