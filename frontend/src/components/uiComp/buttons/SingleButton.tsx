import { Box, Button } from "@mui/material";

interface SingleButtonProps {
  text: string;
  variantColor?: "primary" | "secondary";
  variant?: string;
  onClick(): () => void;
}

export default function SingleButton({
  text,
  variantColor = "primary",
}: SingleButtonProps) {
  return (
    <Box>
      <Button
        variant="outlined"
        sx={(theme) => ({
          border: 3,
          borderRadius: 3,
          color:
            variantColor === "primary"
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
          borderColor:
            variantColor === "primary"
              ? theme.palette.primary.main
              : theme.palette.secondary.main,
          textTransform: "none",
          fontSize: "1.2rem",
          fontWeight: 600,
        })}
      >
        {text}
      </Button>
    </Box>
  );
}
