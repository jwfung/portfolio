import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./Home";
import Q2L from "./Q2L";
import Semly from "./Semly";
import Ucredit from "./Ucredit";
import Project from "./Project";
import About from "./About";
import InProduction from "./InProduction";

const Main = () => {

  return (
    <Routes>
      <Route path="/portfolio" element={<Home/>}/>
      {/* <Route path="/" element={<Home/>}/> */}
      <Route path="/portfolio/about" element={<About/>} />
      <Route path="/portfolio/projects/q2l" element={<Q2L/>} />
      <Route path="/portfolio/projects/semly" element={<Semly/>} />
      <Route path="/portfolio/projects/ucredit" element={<InProduction/>} />
      <Route path="/portfolio/projects" element={<Project/>} />
    </Routes>
  )
}

export default Main;