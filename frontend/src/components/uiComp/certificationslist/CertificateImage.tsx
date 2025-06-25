import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
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
        backgroundColor: theme.palette.primary.light,
        borderRadius: "24px",
      }}
    >
      <CardContent>
        <Typography
          variant="h6"
          noWrap
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
            textAlign: "center",
            color: theme.palette.text.primary,
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
            boxShadow: "0 4px 20px rgba(68, 44, 246, 0.4)",
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
