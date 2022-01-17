import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./pages/Home";
import Q2L from "./pages/Q2L";
import Semly from "./pages/Semly";

const Main = () => {
  return (
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/projects/q2l" element={<Q2L/>} />
      <Route path="/projects/semly" element={<Semly/>} />
    </Routes>
  )
}

export default Main;