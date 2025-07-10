import IconButton from "@mui/material/IconButton";
import Box from "@mui/material/Box";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";
import { useTheme } from "@mui/material/styles";

import { useThemeContext } from "../../../context/ThemeContext";

export default function ThemeToggleButton() {
  const theme = useTheme();

  const { toggleColorMode } = useThemeContext();

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        bgcolor: "background.default",
        color: theme.palette.secondary.main,
        borderRadius: 1,
      }}
    >
      <IconButton
        sx={{ ml: 1, mr: { sm: 2 } }}
        onClick={toggleColorMode}
        color="inherit"
      >
        {theme.palette.mode === "dark" ? (
          <Brightness7Icon />
        ) : (
          <Brightness4Icon />
        )}
      </IconButton>
    </Box>
  );
}
