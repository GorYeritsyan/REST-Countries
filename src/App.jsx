import { Route, Routes } from "react-router-dom";
import Layout from "./pages/Layout/Layout";

import Home from "./pages/Home/Home";
import Country from "./pages/Country/Country";
import Region from "./pages/Region/Region";

import "./App.css";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/name/:name" element={<Country />} />
          <Route path="/region/:region" element={<Region />} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
