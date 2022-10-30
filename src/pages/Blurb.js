import React, { useEffect, useState } from 'react';
import '../App.css';

const Blurb = () => {
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY > 80) {
      setColor('black')
    }
    else {
      setColor('clear')
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeColor) 
    return () => {
      window.removeEventListener('scroll',
      changeColor)
    }
  }, [])

  return(
    <div class={`blurb ${color}`}>
      <div className="text">
        <p> I'm Jeanie! </p>
        <p>I am a current undergraduate aispiring to be a product designer.
          My backgrounds are in cognitive science, HCI research, computer science and linguistics! 
        </p>
        <br/>
      </div> 
      <p> see my work below :)</p>
    </div>  
    )
}

export default Blurb;