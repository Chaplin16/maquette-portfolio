
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

import Home from "./pages/home";
import Training from "./pages/training";
import Hobbies from "./pages/hobbies";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="*" element={<Home />} />  {/* Si erreur de chemin : renvoie à l'accueil */}
        <Route path="/training" element={<Training />} />
        <Route path="/hobbies" element={<Hobbies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
