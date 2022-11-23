import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import selfport from "./assets/selfport.png";
import './App.css';

const SideBar = () => {
  const [show, setShow] = useState(false)
  const [, setColor] = useState("yellow")
  const controlBar = () => {
    if (window.scrollY > 200) {
      setShow(true)
    }
    if (window.scrollY > 500) {
      setColor("purple")
    }
    else {
      setShow(false)
      setColor("yellow")
    }
  }

  useEffect(() => {
    window.addEventListener('scroll',
    controlBar) 
    return () => {
      window.removeEventListener('scroll',
      controlBar)
    }
  }, [])

  return(
    <div className={`SideBar ${show &&'SideBar__color'}`} style={{zIndex: "10"}}>
      {/* {show && <div className='SideBar__layout'>
        <Link to="/portfolio/#intro">
            <div className="title" style={{marginLeft: "5%", maxHeight: "35px"}}>
              <p class={color} style={{fontSize: "1.5rem", margin: ".1em 0"}}>jeanie w. fung</p> 
            </div>
          </Link>
        <div className="three-col"> 
          <a href="/portfolio/#projects" spy={true} smooth={true}> projects </a> 
          <Link to="/portfolio/about" spy={true} smooth={true}> about </Link> 
        </div> 
      </div> } */}
      <div className='left'>
        <div className='logo'>
          <Link to="/portfolio" spy={true} smooth={true}> jeanie w. fung</Link> 
        </div>
        <img style={{maxWidth: "20%"}} src={selfport}/>
        <br/>
        <br/>
        <Link to="/portfolio/about" spy={true} smooth={true}> about </Link> 
        <br/>
        <br/>
        <Link to="/portfolio/projects" spy={true} smooth={true}> projects </Link> 
        <br/>
        <br/>
        <a target="_blank" rel="noreferrer" href="https://1drv.ms/w/s!ApAzMnlybCxJl2HKLsEqQXju1_sg?e=mwt5o6"> resume </a> 
        <br/>
      </div>
    </div>  
    )
}

export default SideBar;