import React from 'react';
import '../App.css';
import Topbar from '../Topbar';
import flow from '../assets/flow.jpg';
import lofi from '../assets/lofi.jpg';
import mockup from '../assets/quest2learn.png';
import q2l1 from '../assets/q2l_1.png';
import q2l2 from '../assets/q2l_2.png';
import q2l3 from '../assets/q2l_3.png';

class Case extends React.Component {
  render() {
    return(
      <div>
        <div>
          {/* project */}
          <div className='header'>
            <div className='case'>
              <h1>quest2learn</h1>
              <div/>
              <div>
                <h3>project summary</h3>
                <p style={{ color: "white", fontWeight: "300"}}>
                  quest2learn is a mobile app that strives to gamefy the laboratory learning experience developed 
                  by the students of Johns Hopkins University. We aim to increase positive 
                  student engagement, as well as allow for "hands-on" experiences in wet labs through the use of 
                  Augumented Reality (AR). I was interested to see how we can make learning more fun and 
                  the impact that this project could have on students nationally where schools
                  may not have equal funding for laboratory education.
                </p>
              </div>
            </div>
            <div className='more'>
              <div>
                <h4>role</h4> 
                <ul>product designer</ul> 
              </div>
              <div>
                <h4>timeline</h4>
                <ul>june 2019</ul>
              </div>
              <div>
                <h4>tasks</h4>
                <ul>ux/ui design</ul>
                <ul>prototyping</ul>
                <ul>graphic design</ul>
              </div>
              <div>
                <h4>team</h4>
                <ul>April B.</ul>
                <ul>Ellie R.</ul>
                <ul>Chinat Y.</ul>
              </div>
            </div>
          </div>
          <img src={mockup} alt="" style={{position: "relative", borderRadius: "10px", maxWidth: "80%", margin: 10}}></img>

          {/* background */}
          <div className='case body'>
            <h3>problem</h3>
              <p>At the start of the pandemic, schools moved laboratory classes to an online format. 
                This typically involved watching videos of a professor conducting the experiment and copying down the data.  
                However, students found it <strong>difficult to engage with new concepts</strong> and 
                process the material through watching video recordings alone.</p> 
            <h3>gaining user insights</h3>
              <p>A survey was conducted to better understand how students felt about the situation. 
                I analyzed the data from the student survey, and I came up with two personas
                to illustrate user needs:</p>
              <div className="persona">
                <div>
                  <h4>story</h4>
                  Timothy is a university student taking classes remotely at home.  
                  <h4>desires & needs</h4>
                  <ul>kinetic learner</ul>
                  break from zoom fatigue
                  <h4>pain points</h4>
                  <ul>lose focus watching videos of other people preforming experiments</ul>
                </div>
                {/* <div>
                </div> */}
              </div>
            <h3>solution</h3>
              <p>The goal was to create <strong>a gamefied learning app </strong> 
                that allows students to interact with the material better through AR. 
                This app would replace Zoom recordings of lab procedures and the prework required for lab experiments.
              </p>

            {/* ideation */}
            <h2>Ideation and Prototyping</h2>
            <p>First, I mapped out the basic <strong>user flow</strong> to get an idea of how a user would interact with the app.</p>
            <img src={flow} alt="user flow" style={{maxWidth: "100%"}}/>
            <p>I then created a <strong>low fidelity wireframe</strong> to understand the general layout of the app.</p>
            <img src={lofi} alt="low-fidelity" style={{maxWidth: "100%"}}/>
            <p>From the low fidelity wireframe, my team and I created different high-fidelity mockups. </p> <p>Below are a snapshot from each design: </p>
            <div className='phones'>
              <img src={q2l2} alt=""/>
              <img src={q2l1} alt=""/>
              <img src={q2l3} alt=""/>
            </div>
            <p>I conducted an <strong>A/B test </strong> through Google Forms to determine which interface would be most preferred and intuitive for users. 
            From the data collected, and after undergoing a couple more iterations, we were able to combine ideas from all three designs into the final prototype. </p> 
            <p>Below are my contributions to the final <strong>high fidelity wireframe.</strong> </p>
            <img/>
            <p>simple color palette to decrease cognitive load. (show palette) easy to read sanscript.
              icons to keep a fun and engaging intereface. feels immersive in lab setting
              easily switch between labs and courses. 
              awards to stay motivated to play and learn.
              recieve grades to be sent to professors.
              progress bars to see what labs are still unfinished. Allows for breaks inbetween lessons.
              </p>

            <p>I also contributed to the illustrations of icons for the app. The icons use a flat design to increase playfulness</p>

            <h2>Final Conclusions</h2>
            <h3>lesson learned</h3>
            <p>Working with a team of different designers and developers, I realized the importance of establishing a style guide in order to keep things cohesive. 
              In a big team, it is also important to effectively communicate your ideas, which mockups are very useful for, and to keep an open mind. </p>
            <p>Overall, as this was my first product design project, I had a lot of fun teaching myself UX research and finding out the official terms for 
              processes that I naturally did, such as creating low-fidelity wireframes and A/B testing for user preferences. </p>
            <h3>looking ahead</h3>
            <p>After the development of our prototype, quest2learn won the Delta Grant... As quest2learn gets expanded into local high schools, 
              usability testing would need to be conducted to determine if the app is able to meet the need specific to k-12 students and instructors. 
              Also need to design the instructor's side </p>
            <br/>
          </div>
        </div>
      </div>
    )
  }
}

export default Case;