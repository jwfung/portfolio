import React from 'react';
import logo from './assets/small icon.png';
import { Link } from 'react-scroll';
import './App.css';

class Topbar extends React.Component {
  render() {
    return(
      <div className="topbar">
        <div className="logo"> <img src={logo} alt="" style={{maxHeight: "34px"}}/> <p style={{fontSize: "25px"}}>jeanie fung</p> </div>
        <div/>
        <div className="about" style={{marginRight: "0"}}> 
          <Link to="about" spy={true} smooth={true}> about </Link> 
          <Link to="projects" spy={true} smooth={true}> projects </Link> 
          <p> resume </p> 
        </div> 
      </div>  
    )
  }
}

export default Topbar;