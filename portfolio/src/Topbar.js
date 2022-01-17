import React from 'react';
import logo from './assets/small icon.png'
import './App.css';

class Topbar extends React.Component {
  render() {
    return(
      <div className="topbar">
        <div className="logo"> <img src={logo} alt="" style={{maxHeight: "34px"}}/> <p style={{fontSize: "25px"}}>jeanie fung</p> </div>
        <div/>
        <div className="about" style={{marginRight: "0"}}> 
          <p> about </p> 
          <p> projects </p> 
          <p> resume </p> 
        </div> 
      </div>  
    )
  }
}

export default Topbar;