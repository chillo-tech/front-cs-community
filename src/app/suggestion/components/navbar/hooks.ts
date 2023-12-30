"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export const useFn = () => {
  const [isDisplay, setIsDisplay] = useState(false);
  const handleDisplay = () => setIsDisplay(true);
  const handleClose = () => setIsDisplay(false);

  const router = useRouter();
  const gotoHandler = (route: string) => () => {
    setIsDisplay(false);
    router.push(route);
  };

  return {
    gotoHandler,
    isDisplay,
    handleClose,
    handleDisplay,
  };
};
