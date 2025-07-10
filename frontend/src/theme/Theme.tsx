import { createTheme, type ThemeOptions } from "@mui/material/styles";

const lightThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: `"Nunito", "Saira Condensed", Arial, sans-serif`,
  },
  palette: {
    mode: "light",
    primary: {
      main: "#442CF6",
      light: "#6956F7",
    },
    secondary: {
      main: "#fc036c",
      light: "#FC3589",
    },
    background: {
      default: "#f5f5f5",
    },
    text: {
      /*   primary: "#000000",
      secondary: "#666666", */
      primary: "#442CF6",
      secondary: "#fc036c",
    },
  },
};
const darkThemeOptions: ThemeOptions = {
  typography: {
    fontFamily: `"Nunito", "Saira Condensed", Arial, sans-serif`,
  },
  palette: {
    mode: "dark",
    primary: {
      main: "#0065F8",
      light: "#6956F7",
    },
    secondary: {
      main: "#fc036c",
      light: "#FC3589",
    },
    background: {
      default: "#0e0d0d",
    },
    text: {
      /*   primary: "#f5f5f5",
      secondary: "#666666", */
      primary: "#0065F8",
      secondary: "#fc036c",
    },
  },
};

export const lightTheme = createTheme(lightThemeOptions);
export const darkTheme = createTheme(darkThemeOptions);
