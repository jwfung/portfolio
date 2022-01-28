import React from 'react';
import icon from '../assets/full body.png';
import Project from './Project';
import '../App.css';
import china from  "../assets/china.png";
import korea from "../assets/korea.png";
import spain from "../assets/spain.png";

class Home extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return(
      <div>
        <div className="home"/> 
          <div className="textbox">
            <div className="text">
              <div/>
              <div className="three-col" style={{maxWidth: "300px"}}>
                <h1 className='hello'>hello!</h1>
                <h1 className='hello'>i'm</h1>
                <h1 className='hello'>jeanie</h1>
              </div>
              <p>I am a multidisciplinary product designer with backgrounds in cognitive science research, computer science, design, and linguistics!</p>
              {/* <p>See my work below</p> */}
            </div>
          </div>
          <div className='flags'>
            currently learning: 
            <img src={china} alt="china flag" style={{height:"25px"}}/>
            <img src={korea} alt="korean flag" style={{height:"25px"}}/>
            <img src={spain} alt="spanish flag" style={{height:"25px"}}/>
          </div>
        <img src={icon} alt="" style={{position: "absolute", top: "30%", left: "30%", maxHeight: "400px"}}/>
      </div>  
    )
  }
}

export default Home;