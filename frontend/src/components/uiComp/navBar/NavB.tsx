import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
  useTheme,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import ThemeToggleButton from "../buttons/ThemeToggleButton";

interface NavLink {
  title: string;
  path: string;
  icon?: React.ReactNode | null;
  action?: () => void;
}

interface NavBarProps {
  navArrayLinks: NavLink[];
}

export default function NavB({ navArrayLinks }: NavBarProps) {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor:
            theme.palette.mode === "dark"
              ? theme.palette.background.default
              : theme.palette.background.default,
          backgroundImage: "none",
          boxShadow: "none",
        }}
      >
        <Container disableGutters>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              py: "1.5rem",
              borderBottom: `1px solid ${theme.palette.primary.main}`,
              borderRadius: "0px 0px 16px 16px",
            }}
          >
            <Box sx={{ display: { xs: "flex", sm: "none" }, flexShrink: 0 }}>
              <IconButton
                color="inherit"
                onClick={() => setOpen(true)}
                sx={{
                  display: { xs: "flex", sm: "none" },
                  color: theme.palette.text.primary,
                }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box
              sx={{
                display: { xs: "none", sm: "flex" },
                flexGrow: 1,
                justifyContent: "center",
              }}
            >
              {navArrayLinks.map((item) => (
                <Button
                  key={item.title}
                  onClick={() => {
                    if (item.action) {
                      item.action();
                    } else {
                      const targetId = item.path.replace("/", "");
                      if (targetId === "hero") {
                        window.scrollTo({ top: 0, behavior: "smooth" });
                      } else {
                        const element = document.getElementById(targetId);
                        if (element) {
                          const offset = 64; // 2rem en px
                          const y =
                            element.getBoundingClientRect().top +
                            window.pageYOffset -
                            offset;
                          window.scrollTo({ top: y, behavior: "smooth" });
                        }
                      }
                    }
                  }}
                  sx={{
                    mx: item.icon ? 0 : { md: 3 },
                    fontSize: "1rem",
                    position: "relative",
                    "&::after": {
                      content: '""',
                      position: "absolute",
                      bottom: 0,
                      left: "50%",
                      transform: "translateX(-50%) scaleX(0)",
                      transformOrigin: "center",
                      width: "100%",
                      height: "2px",
                      backgroundColor: theme.palette.secondary.main,
                      borderRadius: "999px",
                      transition: "transform 0.3s ease",
                    },
                    "&:hover::after": {
                      transform: "translateX(-50%) scaleX(1)",
                    },
                  }}
                >
                  {item.icon ? item.icon : item.title}
                </Button>
              ))}
            </Box>
            <Box sx={{ ml: "auto" }}>
              <ThemeToggleButton />
            </Box>
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navArrayLinks={navArrayLinks} setOpen={setOpen} />{" "}
      </Drawer>
    </>
  );
}
