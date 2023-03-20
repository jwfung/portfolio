import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import q2l from "../assets/q2l_tn.png";
import semly from "../assets/semly_tn2.png";
import uc from "../assets/uc_tn.png";
import bts from "../assets/bts.jpg";
import peanuts from "../assets/peanuts.jpg"

class ProjectList extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return(
      <div id="projects">
        <div style={{minHeight: "10%"}}>
          <br/>
          <br/>
        </div>
        <div className='project'>
          <p>UX/UI</p>
          <Link to="/portfolio/BTS" spy={true} smooth={true}> 
            <img src={bts} alt="by their side project" style={{borderRadius: "20px"}}/>
          </Link> 
          <Link to="/portfolio/Peanuts" spy={true} smooth={true}> 
            <img src={peanuts} alt="peanuts project" style={{borderRadius: "20px"}}/>
          </Link>
          {/* <Link to="/portfolio/projects/q2l" >
            <img src={q2l} alt="quest2learn mockups" style={{borderRadius: "20px"}}/>
          </Link>
          <Link to="/portfolio/projects/semly" >
            <img src={semly} alt="semly mockups" style={{borderRadius: "20px"}}/>
          </Link>
          <Link to="/portfolio/projects/ucredit" >
            <img src={uc} alt="ucredit mockups" style={{borderRadius: "20px"}}/>
          </Link> */}
        </div>  
      </div>
    )
  }
}

export default ProjectList;