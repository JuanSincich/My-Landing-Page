import { alpha, Box, Card, CardContent, Typography } from "@mui/material";
import theme from "../../../theme/Theme";

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
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 4px 5px rgba(68, 44, 246, 0.3)",
        backgroundColor: alpha(theme.palette.primary.light, 0.1),
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
            color: theme.palette.primary.main,
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
