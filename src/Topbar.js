import React, { useEffect, useState } from 'react';
import logo from './assets/small icon.png';
import { Link } from 'react-router-dom';
import './App.css';

const Topbar = () => {
  const [show, setShow] = useState(false)
  const [color, setColor] = useState("yellow")
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
    <div className={`topbar ${show &&'topbar__color'}`} style={{zIndex: "10"}}>
      {show && <div className='topbar__layout'>
        <Link to="/portfolio/#intro">
            <div className="title" style={{marginLeft: "5%", maxHeight: "35px"}}>
              <p class={color} style={{fontSize: "1.5rem", margin: ".1em 0"}}>jeanie w. fung</p> 
            </div>
          </Link>
        <div className="three-col"> 
          <a href="/portfolio/#projects" spy={true} smooth={true}> projects </a> 
          <Link to="/portfolio/about" spy={true} smooth={true}> about </Link> 
        </div> 
      </div> }
    </div>  
    )
}

export default Topbar;