import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Pusdikarmed, Pussenarmed } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/pages/pussenarmed" element={<Pussenarmed />} />
      <Route path="/pages/pussenarmed" element={<Pussenarmed />} />
      <Route path="/pages/pusdikarmed" element={<Pusdikarmed />} />
    </Routes>
  );
}

export default App;
