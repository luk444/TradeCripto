import React from "react";
import { Routes, Route } from "react-router-dom";
import Analytics from "./components/Analytics";
import Cards from "./components/Cards";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/nosotros" element={<Analytics />} />
        <Route path="/trade" element={<Cards />} />
      </Routes>
    </div>
  );
}

export default App;
