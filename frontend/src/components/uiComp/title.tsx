/* import { Typography, useTheme } from "@mui/material";

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
  const theme = useTheme();
  return (
    <Typography
      variant={variant}
      sx={{
        fontFamily: "Saira Condensed",
        fontWeight: 700,

        paddingBottom: "1rem",
        ...sx,
      }}
    >
      {children}
    </Typography>
  );
}
 */

import { Typography, useTheme } from "@mui/material";

interface TitleProps {
  children: React.ReactNode;
  variant?: "h1" | "h2" | "h3" | "h4" | "h5";
  responsive?: {
    xs?: "h1" | "h2" | "h3" | "h4" | "h5";
    sm?: "h1" | "h2" | "h3" | "h4" | "h5";
    md?: "h1" | "h2" | "h3" | "h4" | "h5";
    lg?: "h1" | "h2" | "h3" | "h4" | "h5";
  };
  sx?: object;
}

export default function Title({
  children,
  variant = "h2",
  responsive,
  sx = {},
}: TitleProps) {
  const theme = useTheme();

  // Determina el variant inicial
  const baseVariant = responsive?.xs || variant;

  // Calcula el variant para cada breakpoint
  const getResponsiveVariant = (breakpoint: "sm" | "md" | "lg") => {
    return (
      responsive?.[breakpoint] ||
      (breakpoint === "sm"
        ? baseVariant
        : breakpoint === "md"
        ? responsive?.sm || baseVariant
        : responsive?.md || responsive?.sm || baseVariant)
    );
  };

  return (
    <Typography
      variant={baseVariant} // Prop directa de Typography
      sx={{
        fontFamily: "Saira Condensed",
        fontWeight: 700,
        paddingBottom: "1rem",
        // Aplica variants responsive usando la lógica externa
        ...(responsive && {
          [theme.breakpoints.up("sm")]: {
            fontSize: theme.typography[getResponsiveVariant("sm")].fontSize,
          },
          [theme.breakpoints.up("md")]: {
            fontSize: theme.typography[getResponsiveVariant("md")].fontSize,
          },
          [theme.breakpoints.up("lg")]: {
            fontSize: theme.typography[getResponsiveVariant("lg")].fontSize,
          },
        }),
        ...sx, // Estilos adicionales (totalmente independientes)
      }}
    >
      {children}
    </Typography>
  );
}
