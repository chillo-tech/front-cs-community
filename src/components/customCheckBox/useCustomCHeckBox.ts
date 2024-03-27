import { useEffect, useState } from "react";

const useCustomCheckBox = ({
  selected,
  index,
  setSelected,
  id,
}: {
  selected: number | null | undefined;
  index: number;
  setSelected: () => void;
  id: string;
}) => {
  const [element, setElement] = useState<HTMLInputElement | undefined | null>();
  const [isSelected, setIsSelected] = useState(false);
  const handleClick = () => {
    setIsSelected(true);
    setSelected();
    if (element) element.click();
  };
  useEffect(() => {
    setIsSelected(selected === index);
  }, [index, selected]);
  useEffect(() => {
    setElement(document.getElementById(id) as HTMLInputElement);
  }, [id]);

  return {
    element,
    isSelected,
    handleClick,
  };
};

export { useCustomCheckBox };
