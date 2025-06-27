import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  typography: {
    fontFamily: `"Nunito", "Saira Condensed", Arial, sans-serif`,
    allVariants: {
      color: "black",
    },
  },
  palette: {
    mode: "light",
    primary: {
      main: "#442CF6",
      light: "#6956F7",
    },
    secondary: {
      main: "#fc036c",
    },
    background: {
      default: " #f5f5f5",
    },
    text: {
      primary: "rgb(0, 0, 0)",
      secondary: "#666666",
    },
  },
});

export default theme;
