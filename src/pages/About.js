import React from 'react';
import '../App.css';
import { render } from 'react-dom';

import china from  "../assets/china.png";
import korea from "../assets/korea.png";
import spain from "../assets/spain.png";
import thirty from "../assets/watercolor/30_green.png";
import botanical from "../assets/watercolor/botanical_print.png";
import clean from "../assets/watercolor/clean.png";
import collage from "../assets/watercolor/collage.png";
import interior from "../assets/watercolor/interior.png";
import portrait from "../assets/watercolor/portrait.png";
import series from "../assets/watercolor/series.png";
import pattern from "../assets/watercolor/pattern.png";

import Gallery from 'react-grid-gallery';

const IMAGES =
[{
  src: clean,
  thumbnail: clean,
  thumbnailWidth: 300,
  thumbnailHeight: 300,
  // caption: "After Rain (Jeshu John - designerspics.com)"
},
{
  src: interior,
  thumbnail: interior,
  thumbnailWidth: 3,
  thumbnailHeight: 3,
},
{
  src: series,
  thumbnail: series,
  thumbnailWidth: 3,
  thumbnailHeight: 3,
  // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
},
{
  src: portrait,
  thumbnail: portrait,
  thumbnailWidth: 3,
  thumbnailHeight: 3,
},

{
  src: botanical,
  thumbnail: botanical,
  thumbnailWidth: 3,
  thumbnailHeight: 3,
},
{
  src: thirty,
  thumbnail: thirty,
  thumbnailWidth: 500,
  thumbnailHeight: 300,
  // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
},
//{
  // src: collage,
  // thumbnail: collage,
  // thumbnailWidth: 3,
  // thumbnailHeight: 3,
  // tags: [{value: "Ocean", title: "Ocean"}, {value: "People", title: "People"}],
//},
]

class About extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return(
      <div>
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
        <div className='main'>
        <h2>my resume</h2>
        <a className='btn' target="_blank" href="https://1drv.ms/w/s!ApAzMnlybCxJl2HKLsEqQXju1_sg?e=mwt5o6"> resume </a> 
        <h2>my writing</h2>
        <a className="btn" target="_blank" href="https://www.jhunewsletter.com/staff/jeanie-fung">the JHU News-Letter</a>
        <br/>
        <br/>
        <h2>my artwork</h2>
        <div className='mid' style={{left: "5%"}}>
          <Gallery 
            images={IMAGES}  
            enableImageSelection={false}
            rowHeight='300'
            margin='5%'
          />
        </div>          
      </div>
      </div>
    )
  }
}

export default About;