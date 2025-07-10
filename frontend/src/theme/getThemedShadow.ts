// src/theme/getThemedShadow.ts

import type { Theme } from "@mui/material/styles";
import { alpha } from "@mui/material/styles";

export const getThemedShadow = (
  theme: Theme,
  opacityLight: number = 0.3,
  opacityDark: number = 0.3
): string => {
  const shadowBaseColor = theme.palette.primary.main;

  const themedShadowColor =
    theme.palette.mode === "dark"
      ? alpha(shadowBaseColor, opacityDark)
      : alpha(shadowBaseColor, opacityLight);

  return `0px 4px 5px ${themedShadowColor}`;
};
