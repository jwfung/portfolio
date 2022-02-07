import React from 'react';
import full_icon from '../assets/full body.png';
import image from '../assets/jeanie.JPG';
import icon from '../assets/small icon.png';
import Project from './Project';
import '../App.css';
import { Link } from "react-router-dom";
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
          <div className="textbox" style={{left: "30%", top: "30%"}}>
            {/* <div className="text">
            <div className="three-col-hello"> 
              <h1 className='hello'>i'm</h1>
              <h1 className='hello'>jeanie</h1> 
              <img src={icon} alt="" style={{maxHeight: "50px"}}/> 
             </div> 
            </div> */}
          <div className='text'>
          <h1 className='hello'>hello! i'm jeanie</h1>
            <p style={{fontWeight: "500"}}>I am an undergrad student at Johns Hopkins University. My backgrounds are in cognitive science research, computer science, design, and linguistics!</p>
            {/* <p>See my work below</p> */}
            <br/>
            <Link to="/portfolio/projects" className="btn"> see my work </Link>
          </div>
          </div>
          {/* <div className='flags'>
            currently learning: 
            <img src={china} alt="china flag" style={{height:"25px"}}/>
            <img src={korea} alt="korean flag" style={{height:"25px"}}/>
            <img src={spain} alt="spanish flag" style={{height:"25px"}}/>
          </div> */}
        <img src={image} alt="" style={{position: "absolute", top: "20%", left: "15%", maxWidth: "33%", height: "auto"}}/>
      </div>  
    )
  }
}

export default Home;