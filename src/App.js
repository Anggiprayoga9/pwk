import React from "react";
import { Route, Routes } from "react-router-dom";
import { Main, Pussenarmed } from "./pages";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/pages/pussenarmed" element={<Pussenarmed />} />
    </Routes>
  );
}

export default App;
