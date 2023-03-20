import React, { useEffect, useState } from 'react';
import '../App.css';
import Selfport from "../svg.js";

const Intro = () => {
  const [show, setShow] = useState(true)
  const ShowBlu = () => {
    if (window.scrollY > 500) {
      setShow(false)
    }
    else {
      setShow(true)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', ShowBlu) 
    return () => {
      window.removeEventListener('scroll', ShowBlu)
    }
  }, [])


  return(
    <>
    {show && <div className="intro">
        <div className="title" style={{left: "4%", maxHeight: "35px", position: "fixed", top: "0"}}>
          <p class="yellow" style={{fontSize: "1.3rem", margin: ".1em 0", fontStyle: "italic"}}>jeanie w. fung</p> 
        </div>
        <div class="icon">
          <Selfport/>
        </div>
        <div class="title">
          <p style={{fontStyle:"oblique"}}>Hello!</p>
          <p >안녕하세요~</p>
          <p>Goedendag</p>
        </div>
      </div>}
    </>
    

  )
}
export default Intro;