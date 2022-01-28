import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./Home";
import Q2L from "./Q2L";
import Semly from "./Semly";
import Ucredit from "./Ucredit";
import Project from "./Project";
import About from "./About";

const Main = () => {

  return (
    <Routes>
      <Route path="/portfolio" element={<Home/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>} />
      <Route path="/projects/q2l" element={<Q2L/>} />
      <Route path="/projects/semly" element={<Semly/>} />
      <Route path="/projects/ucredit" element={<Ucredit/>} />
      <Route path="projects" element={<Project/>} />
    </Routes>
  )
}

export default Main;