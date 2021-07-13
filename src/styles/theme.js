import { fontSizes } from "./system/fontSizes";
import { light, dark } from "./system/colors";
import { space } from "./system/space";
import { radii } from "./system/radii";

export const lightTheme = {
  isLight: true,
  colors: { ...light },
  fontSizes,
  radii,
  space,
};

export const darkTheme = {
  isLight:false,
  colors: { ...dark },
  fontSizes,
  radii,
  space,
};
