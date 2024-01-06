"use client";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { suggestionSchema } from "./suggestion-schema";
import { useContext, useEffect } from "react";
import { wrapperContext } from "../layout";
import { useMutation } from "react-query";
import { axios } from "@/utils";

function useSuggestion() {
  const { data, setData } = useContext(wrapperContext);
  const mutation = useMutation(postSuggestion, {
    onSettled: () => {
      console.log("fait");
    },
  });

  async function postSuggestion(obj: any) {
    try {
      const res = await axios.post("/suggestions", obj);
      // toast.success("success, you will recieve a confirmation via email");
    } catch (err: any) {
      console.log("err", err);
      // toast.error(err?.response?.data?.message || "something went wrong");
    }
  }

  useEffect(() => {
    setData({
      leftComponent: {
        desc: `Sentez vous libre de remplir ce formulaire, et je ferais de mon
        mieux pour creer une video a propos du sujet que vous proposez`,
        title: `Avez vous une idee de video`,
      },
      metaData: {
        description: "Powered by chillo.tech",
        title: "Suggestions",
      },
    });
  }, [setData]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(suggestionSchema),
  });

  const onSubmitHandler = (data: any) => {
    console.log({ data });
    mutation.mutateAsync(data);

    // reset();
  };

  const onInvalid = (errors: any) => console.error(errors);

  const handleSuggestionSubmit = handleSubmit(onSubmitHandler, onInvalid);

  return {
    register,
    errors,
    handleSuggestionSubmit,
  };
}

export default useSuggestion;
