import { Route, Routes } from "react-router-dom";

import Layout from "./layout/Layout";
import LandingPage from "./components/sections/LandingPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<LandingPage />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
