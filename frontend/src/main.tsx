import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { ThemeContextProvider } from "./context/ThemeContext.tsx";
import "@fontsource/nunito/300.css";
import "@fontsource/nunito/400.css";
import "@fontsource/nunito/500.css";
import "@fontsource/nunito/700.css";
import "@fontsource/saira-condensed/300.css"; // Light
import "@fontsource/saira-condensed/400.css"; // Regular
import "@fontsource/saira-condensed/600.css"; // SemiBold
import "@fontsource/saira-condensed/700.css"; // Bold
import "@fontsource/saira-condensed/900.css"; // Black

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ThemeContextProvider>
  </StrictMode>
);
