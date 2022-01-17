import React from 'react';
import icon from '../assets/full body.png'
import Project from '../Project'
import '../App.css';

class Home extends React.Component {
  render() {
    return(
      <div>
        <div className="home" id="about"/> 
        <div className="textbox">
          <div className="text">
            <div/>
            <div className="about">
              <h1 className='hello'>hello!</h1>
              <h1 className='hello'>i'm</h1>
              <h1 className='hello'>jeanie</h1>
            </div>
            <p>I am a multidisciplinary product designer. My background is in cognitive science research, design, and linguistics!</p>
            {/* <p>See my work below</p> */}
          </div>
        </div>
        <img src={icon} alt="" style={{position: "absolute", top: "30%", left: "30%", maxHeight: "400px"}}/>
        <div id="projects">
          <br/>
          <h1>projects</h1>
          <Project/>
        </div>
      </div>  
    )
  }
}

export default Home;