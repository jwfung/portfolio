import React from 'react';
import '../App.css';

import botanical from "../assets/watercolor/botanical_print.jpg";
import clean from "../assets/watercolor/clean.jpg";
import interior from "../assets/watercolor/interior.jpg";
import portrait from "../assets/watercolor/portrait.jpg";
import collage from "../assets/watercolor/collage.jpg";

import duck1 from "../assets/vectors/duck1.PNG";
import duck2 from "../assets/vectors/duck2.PNG"
import iu from "../assets/vectors/iu.JPG";
import boba from "../assets/vectors/boba space.JPG";

import alley from "../assets/photos/alley.jpg";
import alley2 from "../assets/photos/alley2.jpg";
import banok from "../assets/photos/banok.jpg";
import busan from "../assets/photos/busan.jpg";
import cat from "../assets/photos/cat.jpg";

import Topbar from '../Topbar';

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return(
      <div className='body'>
        <Topbar/>
        <div className='right' style={{textAlign: "left"}}>
          <br/>
          <br/>
          <br/>
          <div className='title'>
            <p style={{fontStyle:"oblique", color: "#60065D", textAlign: "center"}}>hi, i'm jeanie!</p>
          </div> 
          <br/>
          <p> 
            Welcome to the part of this site where I get to share random tibits of myself! 
            For formalities sake, I’m a soon-to-be grad (whoo!) at The Johns Hopkins University 
            where I studied Cognitive Science (with a focus in Linguistics), Computer Science, and Visual Arts.  
          </p> 
          <p>
            I am interested in discovering how we can create human-centric design for good, a question which I believe requires continuous education and iterations. 
            During a previous internship with MassDOT, I became particularly interested in universal design and how we can better our world for people of all abilities. 
          </p> 
          <p>
            Over the years, I've been given an amazing opportunity to study abroad in China, South Korea, 
            and The Netherlands. It has given me a unique perspective on how different cultures do things, 
            inspiring me to think outside-of-the-box and questioning the status-quo. 
            This has also led me to a random niche I really enjoy exploring: Urban Design and how we can create more people-first cities. 
            I also love learning new languages, mostly so I can see the overlaps and evolution between different languages first hand.
          </p>
          <p>
            In my free time, I enjoy adventuring by foot, and exploring new hobbies, like aerial trapeze and dragon-boat racing!
            I also enjoy anything hands-on, like painting and sewing. Check out some of my work below!
          </p>  
          <br/>
          <br/>
          <br/>

          <p style={{textAlign: "center"}}>Favorite Travel Photos</p>
          <div className='two-col'>
            <img src={busan} />
            <img src={banok} />
            <img src={alley2} />   
            <img src={cat} />   
          </div>

          <div className="two-col">
            <div>
              <br/>
              <br/>
              <p>Watercoloring</p>
              <div className='textbox'>
                <img src={clean} />
                <img src={collage} />
                <img src={interior} />
                <img src={portrait} />
                {/* <img src={botanical} /> */}
                {/* <img src={thirty} style={{maxWidth: "50%"}}/> */}
              </div>
            </div>
            <div>
              <p>Writing</p>
              <div className='textbox' style={{padding: "0", maxWidth: "80%" }}>
                <br/>
                <a target="_blank" href="https://www.jhunewsletter.com/staff/jeanie-fung">- the JHU News-Letter</a>
                <br/>
                <br/>
              </div>
              <div>
                <br/>
                <br/>
                <p>Vector Art</p>
                <div className=''>
                  <img src={iu} />
                  <img src={boba} />
                  <img src={duck1} />
                  <img src={duck2} />
                </div>
              </div>
            </div>         
          <div/>          
        </div>
      </div>
    </div>
    )
  }
}

export default About;