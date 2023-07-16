// App.js
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HeaderAccueil from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import AproposContainer from "./components/pages/Apropos";
import Error404 from "./components/pages/404";
import Accueil from "./components/pages/accueil";
import Location from "./components/pages/location";

import "./App.scss";

function App() {
  return (
    <BrowserRouter className="App">
      <HeaderAccueil />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<AproposContainer />} />
        <Route path="/location/:id" element={<Location />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;





