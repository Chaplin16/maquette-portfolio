
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Home from "./pages/Home";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<Home />} />  {/* Si erreur de chemin : renvoie à l'accueil */}
      </Routes>
    </BrowserRouter>
  );
};

export default App;
