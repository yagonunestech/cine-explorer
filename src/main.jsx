import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import App from "./App";
import Busca from "./pages/Busca";

import "./index.css";
import Inicial from "./pages/Inicial";
import Filme from "./pages/Filme";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route path="/" element={<Inicial />} />
          <Route path="movie/:id" element={<Filme />} />
          <Route path="search" element={<Busca />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
