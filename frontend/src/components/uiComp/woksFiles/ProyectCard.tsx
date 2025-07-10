import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
/* import theme from "../../../theme/Theme"; */
import { useTheme } from "@mui/material";
import { alpha } from "@mui/system";
import { getThemedShadow } from "../../../theme/getThemedShadow";

interface ProyectCardProps {
  title: string;
  description: string;
  image: string;
  repoUrl: string;
  siteUrl: string;
}

export default function ProyectCard({
  title,
  description,
  image,
  repoUrl,
  siteUrl,
}: ProyectCardProps) {
  const theme = useTheme();
  return (
    <Card
      sx={{
        borderRadius: "16px",
        /*  boxShadow: "0px 4px 5px rgba(68, 44, 246, 0.3)", */
        boxShadow:
          theme.palette.mode === "light" ? getThemedShadow(theme) : null,
        /*  boxShadow: theme.shadows[3], */
        backgroundColor:
          theme.palette.mode === "light"
            ? alpha(theme.palette.primary.light, 0.1)
            : null,
      }}
    >
      <CardMedia
        component="img"
        alt={title}
        height="140"
        image={image}
        sx={{
          objectPosition: "top",
          objectFit: "cover",
        }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          variant="body2"
          sx={{
            display: "-webkit-box",
            WebkitLineClamp: 2,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            minHeight: "2.5rem",
          }}
        >
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {repoUrl && (
          <Button
            color="secondary"
            size="small"
            component="a"
            href={repoUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              /*   textTransform: "none", */
              border: `1px solid `,
              borderRadius: "12px",
            }}
          >
            Repo
          </Button>
        )}
        {siteUrl && (
          <Button
            color="secondary"
            size="small"
            component="a"
            href={siteUrl}
            target="_blank"
            rel="noopener noreferrer"
            sx={{
              /*   textTransform: "none", */
              border: `1px solid ${theme.palette.secondary.main}`,
              borderRadius: "12px",
            }}
          >
            Sitio
          </Button>
        )}
      </CardActions>
    </Card>
  );
}
