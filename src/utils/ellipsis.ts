const wordEllipsis = (text: string, wordsCountLimit: number) => {
  if (!text) {
    return "";
  }
  let tab = text.split(" ");
  let res = [];
  for (let i = 0; i < wordsCountLimit; i++) {
    res.push(tab[i] || "");
  }

  return res.join(" ").trim();
};

const textEllipsis = (text: string, lettersCount: number, endText?: string) => {
  if (!text) {
    return "";
  }
  if (text.length < lettersCount) {
    return text;
  }
  return text.slice(0, lettersCount) + (endText || "");
};

export { wordEllipsis, textEllipsis };
