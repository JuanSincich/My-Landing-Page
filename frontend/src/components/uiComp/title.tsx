// src/components/uiComp/Title.tsx

import { Typography } from "@mui/material";
import theme from "../../../src/theme/Theme";

interface TitleProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5";
  sx?: object;
}

export default function Title({
  children,
  variant = "h2",
  sx = {},
}: TitleProps) {
  return (
    <Typography
      variant={variant}
      sx={{
        fontFamily: "Saira Condensed",
        fontWeight: 700,
        color: theme.palette.primary.main,
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
