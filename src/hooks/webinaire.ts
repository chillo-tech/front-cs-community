import { schema } from "@/components/webinaire/form/schama";
import { IWebinaireView } from "@/types";
import { axiosInstance } from "@/utils";
import { yupResolver } from "@hookform/resolvers/yup";
import axios, { AxiosError } from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "react-query";

const useWebinaire = ({ slug }: { slug: string }) => {
  const router = useRouter();

  const fetchView = async () => {
    const id = parseInt(slug.split("-").at(-1) || "");
    if(isNaN(id)) router.push('/404')
    const {
      data: { data: view },
    } = await axios.get(
      `/api/backoffice/Description_Webinaire/${id}/?fields=*,image_webinaire.*,formulaire.*`
    );

    if (!view || !view.formulaire || view.slug !== slug) {
      router.push("/404");
      return;
    }

    return view[0] as IWebinaireView;
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

const useWrapper = () => {
  const [errorMessage, setErrorMessage] = useState(
    "Une erreur est survenue, nous allons la résoudre sous peu"
  );

  const [phoneNumber, setPhoneNumber] = useState("");

  const [formPageIndex, setFormPageIndex] = useState(0);

  const answerWebinaire = (data: any) => {
    return axiosInstance.post("/api/backend/Webinaire", data);
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
    getValues,
  } = useForm({
    mode: "onChange",
    resolver: yupResolver(schema),
  });

  const [radioSelectedValue, setRadioSelectedValue] = useState("");

  const onSubmit = (data: any) => {
    const postObj = {
      ...data,
      connaissance_webinaire: data.connaissance_webinaire || "",
      adresse_mail: data.email,
      numero_telephone: `+${phoneNumber}`,
      date_inscription: new Date().toISOString(),
    };
    mutation.mutate(postObj);
  };

  useEffect(() => {
    if ((errors.email || errors.numero_telephone) && formPageIndex !== 0) {
      setFormPageIndex(0);
    }
  }, [errors, formPageIndex]);

  const handleSubmitFn = handleSubmit(onSubmit);
  return {
    mutation,
    getValues,
    radioSelectedValue,
    setRadioSelectedValue,
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
  };
};

export { useWebinaire, useWrapper };
