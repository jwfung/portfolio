import React from 'react';
import icon from '../assets/full body.png';
import '../App.css';
import china from  "../assets/china.png";
import korea from "../assets/korea.png";
import spain from "../assets/spain.png";

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return(
      <div className="about">
        <div>
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
    )
  }
}

export default About;