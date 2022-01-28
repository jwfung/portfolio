import React from 'react';
import logo from './assets/small icon.png';
import { Link } from 'react-router-dom';
import './App.css';

class Topbar extends React.Component {
  render() {
    return(
      <div className="topbar">
          <Link to="/">
            <div className="logo">
              <img src={logo} alt="" style={{maxHeight: "35px", margin: "50%"}}/> <p style={{fontSize: "25px", margin: "10%"}}>jeanie fung</p> 
            </div>
          </Link>
        <div/>
        <div className="three-col" style={{marginRight: "0", maxWidth: "300px"}}> 
          <Link to="/about" spy={true} smooth={true}> about </Link> 
          <Link to="/projects" spy={true} smooth={true}> projects </Link> 
          <a href="https://1drv.ms/w/s!ApAzMnlybCxJl2HKLsEqQXju1_sg?e=mwt5o6"> resume </a> 
        </div> 
      </div>  
    )
  }
}

export default Topbar;