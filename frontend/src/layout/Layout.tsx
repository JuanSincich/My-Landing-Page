// src/components/layout/Layout.tsx
import { Outlet } from "react-router-dom";
import NavBar from "../components/uiComp/navBar/NavB";
/* import Footer from "../components/uiComp/footer/Footer"; */
import { Box } from "@mui/material";
/* import Login from "../components/pages/Login"; */

/* interface NavLink {
  title: string;
  path: string;
  icon?: React.ReactNode | null;
  action?: () => void;
} */

export default function Layout() {
  /*   const [loginOpen, setLoginOpen] = useState(false);

  const handleCloseLoginModal = () => {
    setLoginOpen(false);
  }; */

  const navArrayLinks = [
    { title: "Inicio", path: "/hero" },
    { title: "Habilidades", path: "/habilities" },
    { title: "Proyectos", path: "/proyects" },
    { title: "Certificaciones", path: "/certifications" },

    { title: "Contacto", path: "/contact" },
  ];

  return (
    <Box
      component="main"
      sx={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
      }}
    >
      <NavBar navArrayLinks={navArrayLinks} />
      <Box sx={{ flexGrow: 1 }}>
        <Outlet />
      </Box>
      {/*  <Footer /> */}

      {/* <Modal
        open={loginOpen}
        onClose={() => setLoginOpen(false)}
        aria-labelledby="login-modal-title"
        aria-describedby="login-modal-description"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 1300,
        }}
        BackdropProps={{
          sx: {
            backgroundColor: "rgba(0, 0, 0, 0.5)",
            backdropFilter: "blur(3px)",
          },
        }}
      >
        <Box
          sx={{
            backgroundColor: "white",
            borderRadius: 2,
            boxShadow: 24,
            padding: 4,
            zIndex: 1400,
            width: { xs: "90%", sm: "auto" },
          }}
        >
          <Login onCloseModal={handleCloseLoginModal} />
        </Box>
      </Modal> */}
    </Box>
  );
}
