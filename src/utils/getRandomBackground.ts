const possiblesBackgrounds = [
  "bg4287f5",
  "bg82878f",
  "bgdde3a3",
  "bg545451",
  "bga1514a",
];

const getRandomBackground = () => {
  const color =
    possiblesBackgrounds[
      Math.floor(Math.random() * possiblesBackgrounds.length)
    ];
  return color;
};

export { getRandomBackground as getRandomHexColor };
