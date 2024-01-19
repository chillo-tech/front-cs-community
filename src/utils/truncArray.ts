const truncArray: (tab: any[], childrenCount: number) => any[][] = (
  tab: any[],
  childrenCount: number
) => {
  if (childrenCount <= 0) {
    return [tab];
  }
  const parentLength = tab.length;
  if (parentLength < childrenCount) {
    return truncArray(tab, childrenCount - 1);
  }
  const res: any[][] = Array(childrenCount);
  for (let i = 0; i < parentLength; i++) {
    if (!res[i % childrenCount]) res[i % childrenCount] = [];
    res[i % childrenCount].push(tab[i]);
  }
  return res;
};

export { truncArray };
