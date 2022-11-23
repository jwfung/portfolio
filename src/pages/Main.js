import React from 'react';
import { Routes, Route } from 'react-router-dom';

import Home from "./Home";
import Q2L from "./CaseStudies/Q2L";
import Semly from "./CaseStudies/Semly";
import BTS from './CaseStudies/BTS';
import Peanuts from "./CaseStudies/Peanuts";
// import Ucredit from "./CaseStudies/Ucredit";
import Project from "./Project";
import About from "./About";
import InProduction from "./InProduction";
import "@fontsource/merriweather";


const Main = () => {
  window.scrollTo(0,0);

  return (      
    <Routes>
      <Route path="/portfolio" element={<Home/>}/>
      <Route path="/portfolio/about" element={<About/>} />
      <Route path="/portfolio/projects/q2l" element={<Q2L/>} />
      <Route path="/portfolio/projects/semly" element={<Semly/>} />
      <Route path="/portfolio/projects/ucredit" element={<InProduction/>} />
      <Route path="/portfolio/BTS" element={<BTS/>} /> 
      <Route path="/portfolio/Peanuts" element={<Peanuts/>} /> 
      <Route path="/portfolio/projects" element={<Project/>} />
    </Routes>
  )
}

export default Main;