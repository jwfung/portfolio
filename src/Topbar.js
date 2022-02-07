import React from 'react';
import logo from './assets/small icon.png';
import { Link } from 'react-router-dom';
import './App.css';

class Topbar extends React.Component {
  render() {
    return(
      <div className="topbar">
          <Link to="/portfolio">
            <div className="logo">
              <img src={logo} alt="" style={{maxHeight: "35px", margin: "50%"}}/> <h3 style={{fontSize: "25px", margin: "10%", color: "black"}}>jeanie fung</h3> 
            </div>
          </Link>
        <div/>
        <div className="three-col" style={{marginRight: "0", maxWidth: "300px"}}> 
          <Link to="/portfolio/projects" spy={true} smooth={true}> projects </Link> 
          <Link to="/portfolio/about" spy={true} smooth={true}> about </Link> 
        </div> 
      </div>  
    )
  }
}

export default Topbar;