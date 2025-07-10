/* import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface navArrayLinks {
  title: string;
  path: string;
}

interface NavListDrawerProps {
  navArrayLinks: navArrayLinks[];
}

export default function NavListDrawer({ navArrayLinks }: NavListDrawerProps) {
  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton component="a" href={item.path}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
 */

import {
  Box,
  Divider,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
} from "@mui/material";

interface navArrayLinks {
  title: string;
  path: string;
}

interface NavListDrawerProps {
  navArrayLinks: navArrayLinks[];
  setOpen: (open: boolean) => void; // Añadí esta prop
}

export default function NavListDrawer({
  navArrayLinks,
  setOpen,
}: NavListDrawerProps) {
  const handleNavigation = (path: string) => {
    const targetId = path.replace("/", "");
    if (targetId === "hero") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const element = document.getElementById(targetId);
      if (element) {
        const offset = 64; // Mismo offset que en NavB
        const y =
          element.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: y, behavior: "smooth" });
      }
    }
    setOpen(false); // Cierra el drawer después de la navegación
  };

  return (
    <Box sx={{ width: 250 }}>
      <nav>
        <List>
          {navArrayLinks.map((item) => (
            <ListItem disablePadding key={item.title}>
              <ListItemButton onClick={() => handleNavigation(item.path)}>
                <ListItemText primary={item.title} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </nav>
      <Divider />
    </Box>
  );
}
