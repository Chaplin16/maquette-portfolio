
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Container from "./components/container/Container"
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Training from "./pages/Training";
import Hobbies from "./pages/Hobbies";



const App = () => {
  return (
    <BrowserRouter>
      <Container />
      <Routes>
        <Route path="/Home" element={<Home />} />
        <Route path="*" element={<Home />} />  {/* Si erreur de chemin : renvoie à l'accueil */}
        <Route path="/Portfolio" element={<Portfolio />} /> 
        <Route path="/Training" element={<Training />} />
        <Route path="/Hobbies" element={<Hobbies />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
