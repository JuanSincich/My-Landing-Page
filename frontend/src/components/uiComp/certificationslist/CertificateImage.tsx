import { alpha, Box, Card, CardContent, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { getThemedShadow } from "../../../theme/getThemedShadow";

interface CertificateImageProps {
  src: string;
  alt: string;
  onClick?: () => void;
}
export default function CertificateImage({
  src,
  alt,
  onClick,
}: CertificateImageProps) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow:
          theme.palette.mode === "light" ? getThemedShadow(theme) : null,
        backgroundColor:
          theme.palette.mode === "light"
            ? alpha(theme.palette.primary.light, 0.1)
            : null,
      }}
    >
      <CardContent>
        <Typography
          variant="h5"
          noWrap
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textAlign: "center",
            /*   color: theme.palette.primary.main, */
          }}
        >
          {alt}
        </Typography>
      </CardContent>
      <Box sx={{ height: "310px", padding: "16px" }}>
        <Box
          component="img"
          src={src}
          alt={alt}
          onClick={onClick}
          sx={{
            width: "100%",
            height: "auto",
            borderRadius: "1.5rem",

            display: "block",
            cursor: onClick ? "pointer" : "default",
            transition: "transform 0.3s ease",
            "&:hover": {
              transform: onClick ? "scale(1.02)" : "none",
            },
          }}
        />
      </Box>
    </Card>
  );
}
