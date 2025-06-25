import {
  AppBar,
  Box,
  Button,
  Container,
  Drawer,
  IconButton,
  Toolbar,
} from "@mui/material";
import NavListDrawer from "./NavListDrawer";
import { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
/* import Logo from "../../../../public/cartShoppingLogoExport.jpg"; */

import theme from "../../../theme/Theme";
import { useNavigate } from "react-router-dom";

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

  const navigate = useNavigate();

  return (
    <>
      <AppBar
        position="fixed"
        sx={{
          backgroundColor: theme.palette.background.default,
          boxShadow: "none",
          /* borderBottom: `2px solid ${theme.palette.primary.main}`,
          borderRadius: "0px 0px 16px 16px", */
          /* py: { xs: "0.5rem", md: "0.5rem" }, */
        }}
      >
        <Container disableGutters>
          <Toolbar
            disableGutters
            sx={{
              justifyContent: "center",
              py: "1.5rem",
              borderBottom: `2px solid ${theme.palette.primary.main}`,
              borderRadius: "0px 0px 16px 16px",
            }}
          >
            {/* iconBurger */}
            <Box>
              <IconButton
                color="inherit"
                onClick={() => setOpen(true)}
                sx={{ display: { xs: "flex", sm: "none" }, color: "black" }}
              >
                <MenuIcon />
              </IconButton>
            </Box>

            <Box sx={{ display: { xs: "none", sm: "block" } }}>
              {navArrayLinks.map((item) => (
                <Button
                  key={item.title}
                  onClick={() => {
                    if (item.action) {
                      item.action();
                    } else {
                      const targetId = item.path.replace("/", "");
                      if (targetId === "hero") {
                        window.scrollTo({ top: 0, behavior: "smooth" }); // scroll al tope
                      } else {
                        const section = document.getElementById(targetId);
                        section?.scrollIntoView({ behavior: "smooth" });
                      }
                    }
                  }}
                  sx={{
                    color: theme.palette.primary.main,
                    /* px: item.icon ? 0 : { md: 3 }, */
                    mx: item.icon ? 0 : { md: 3 },
                    fontSize: "1rem",
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
          </Toolbar>
        </Container>
      </AppBar>

      <Drawer
        open={open}
        anchor="left"
        onClose={() => setOpen(false)}
        sx={{ display: { xs: "flex", sm: "none" } }}
      >
        <NavListDrawer navArrayLinks={navArrayLinks} />
      </Drawer>
    </>
  );
}
