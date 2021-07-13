const colorsBase = {
  blue: ["#388BB0", "#2E7BB4"],
  blueGray: ["#F1F9FE", "#D9E6F6", "#bbcde8", "#6F92BB", "#5579A1", "#2F4A71"],
  gray: ["#F4F4F4", "#C5C6CA", "#999999", "#5A5A5A", "#333333"],
  black: "#000",
  white: "#fff",
  pink: "#d81d99",
};

export const light = {
  ...colorsBase,
  bg: {
    primary: colorsBase.blueGray[1],
    secondary: colorsBase.blueGray[0],
    tertiary: colorsBase.white,
    quarternary: colorsBase.blueGray[2],
  },
  text: {
    primary: colorsBase.blue[1],
    secondary: colorsBase.blue[0],
    tertiary: colorsBase.blueGray[5],
    quarternary: colorsBase.pink,
    normal: "#000",
  },
  cardBg: colorsBase.white,
  element: {
    primary: colorsBase.blueGray[3],
    secondary: colorsBase.blueGray[4],
  },
  inputBg: colorsBase.gray[0],
  inputColor: colorsBase.gray[4],
};

export const dark = {
  ...colorsBase,
  bg: {
    primary: "#25282a",
    secondary: colorsBase.blueGray[0],
    tertiary: colorsBase.white,
    quarternary: colorsBase.blueGray[2],
  },
  cardBg: "#181a1b",
  text: {
    primary: colorsBase.blue[1],
    secondary: colorsBase.blue[0],
    tertiary: colorsBase.blueGray[5],
    quarternary: colorsBase.pink,
    normal: "#e8e6e3",
  },
  element: {
    primary: colorsBase.blueGray[3],
    secondary: colorsBase.blueGray[4],
  },
  inputBg: "#25282a",
  inputColor: "#c8c3bc",
};
