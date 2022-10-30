import React from 'react';
import '../App.css';
import { Link } from "react-router-dom";
import q2l from "../assets/q2l_tn.png";
import semly from "../assets/semly_tn2.png";
import uc from "../assets/uc_tn.png";

class Project extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return(
      <div id="projects" >
        <div style={{minHeight: "10%"}}>
          <br/>
          <br/>
        </div>
        <h1>latest projects</h1>
        <div className='project'>
          <div>
          <Link to="/portfolio/projects/q2l" >
            <img src={q2l} alt="quest2learn mockups" style={{borderRadius: "20px", maxWidth: "100%", maxHeight: "80%"}}/>
            <div>
              <h2>quest2learn</h2>
              <p>designing a gamefied laboratory basics app to engage and prepare students for lab work </p>
            </div>
          </Link>
          </div>
          <div>
            <Link to="/portfolio/projects/semly" >
              <img src={semly} alt="semly mockups" style={{borderRadius: "20px", maxWidth: "100%", maxHeight: "80%"}}/>
              <h2>semesterly</h2>
              <p>connecting students to faculty advisors to better mentorship</p>
            </Link>
          </div>
          <div>
            <Link to="/portfolio/projects/ucredit" >
              <img src={uc} alt="ucredit mockups" style={{borderRadius: "20px", maxWidth: "100%", maxHeight: "80%"}}/>
              <h2>ucredit</h2>
              <p>simplifying course planning for university students</p>
            </Link>
          </div>
          <div>
            <Link to="/portfolio/BTS" spy={true} smooth={true}> ByTheirSide Redesign </Link> 
          </div>
          <div>
            <Link to="/portfolio/Peanuts" spy={true} smooth={true}> Peanuts </Link> 
          </div>
        </div>  
      </div>
    )
  }
}

export default Project;