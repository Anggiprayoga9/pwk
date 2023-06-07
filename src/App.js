import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Pusdikarmed, Pussenarmed, Ttrakorps } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/pages/pussenarmed" element={<Pussenarmed />} />
      <Route path="/pages/pussenarmed" element={<Pussenarmed />} />
      <Route path="/pages/pusdikarmed" element={<Pusdikarmed />} />
      <Route path="/pages/allttrakorps" element={<Ttrakorps />} />
    </Routes>
  );
}

export default App;
