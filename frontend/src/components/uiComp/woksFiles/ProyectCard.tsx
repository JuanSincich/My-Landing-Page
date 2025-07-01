import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import theme from "../../../theme/Theme";
import { alpha } from "@mui/system";

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
  return (
    <Card
      sx={{
        borderRadius: "16px",
        boxShadow: "0px 4px 5px rgba(68, 44, 246, 0.3)",
        backgroundColor: alpha(theme.palette.primary.light, 0.1),
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
        <Typography color="primary" gutterBottom variant="h5" component="div">
          {title}
        </Typography>
        <Typography
          color="primary"
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
              border: `1px solid ${theme.palette.secondary.main}`,
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
