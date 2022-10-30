import React from 'react';
import '../App.css';

import thirty from "../assets/watercolor/30_green.png";
import botanical from "../assets/watercolor/botanical_print.png";
import clean from "../assets/watercolor/clean.png";
import interior from "../assets/watercolor/interior.png";
import portrait from "../assets/watercolor/portrait.png";
import series from "../assets/watercolor/series.png";
import collage from "../assets/watercolor/collage.png"
import pattern from "../assets/watercolor/pattern.png";

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return(
      <div>
        <div className='decor'/>
        <div className="textbox">
          <div className='text'>
            <p>
              Hello, I'm Jeanie!
            </p> 
            <p> 
              I am a current undergrad junior studying Cognitive Science at the Johns Hopkins University. 
              More specifically, I am focusing on computer science and linguisitcs. 
            </p> 
            <p>
              I am interested in learning how we can develop technology for good, 
              and creating human-centered tech. I am passionate about understanding how we acquire and process langauges, as well as learning 
              new languages myself! 
            </p> 
            <p>
              In my free time, I enjoy exploring new hobbies, like watercolor painting and sewing. Check out some of my
              work below :)
            </p>            
          </div>
        </div>  
        <div className='text' style={{padding: "0 20%"}}>
        <h2>my resume</h2>
        <a className='btn' target="_blank" href="https://1drv.ms/w/s!ApAzMnlybCxJl2HKLsEqQXju1_sg?e=mwt5o6"> resume </a> 
        <h2>my writing</h2>
        <a className="btn" target="_blank" href="https://www.jhunewsletter.com/staff/jeanie-fung">the JHU News-Letter</a>
        <br/>
        <br/>
        <h2>my artwork</h2>
        <div className='gallery'>
          <img src={clean} />
          <img src={interior} />
          <img src={series} />
          <img src={portrait} />
          <img src={botanical} />
          <img src={pattern} />
          {/* <img src={collage} /> */}
          <img src={thirty} style={{maxWidth: "50%"}}/>
          {/* <img src={}/> */}
        </div>          
      </div>
      </div>
    )
  }
}

export default About;