import React, { useEffect, useState } from 'react';
import '../App.css';

const Blurb = () => {
  const [color, setColor] = useState(false)
  const changeColor = () => {
    if (window.scrollY > 80 && window.scrollY < 500) {
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
        <p> Hi, I’m Jeanie!  👋 </p>
        <p> I am a UX designer and developer, striving to create engaging, human-centric designs. </p>
        <p> See my work below :)</p>
      </div> 
    </div>  
    )
}

export default Blurb;