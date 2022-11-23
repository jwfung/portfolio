import React from 'react';
import '../../App.css';
import flow from '../../assets/flow.jpg';
import lofi from '../../assets/lofi.jpg';
import mockup from '../../assets/quest2learn.png';
import q2l1 from '../../assets/q2l_1.png';
import q2l2 from '../../assets/q2l_2.png';
import q2l3 from '../../assets/q2l_3.png';
import icons from '../../assets/q2l_icons.png';
import hifi from '../../assets/q2l_hifi.gif';
import full from '../../assets/q2l_full.png';
import colors from '../../assets/q2l_colors.png';
import types from '../../assets/q2l_type.png';
import sc1 from '../../assets/q2l_sc1.png';
import sc2 from '../../assets/q2l_sc2.png';


class Case extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

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
                  Quest2learn is a mobile app that strives to gamefy the laboratory learning experience developed 
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
          {/* background */}
          <div className='main'>
            <img src={mockup} alt="" style={{borderRadius: "10px", maxWidth: "100%"}}/>
            <div className='mid'> <h2>Background</h2> </div>
            <h3>context</h3>
            <p>
            Spatial awareness and tactile-based learning are important components of a student’s success in science education. 
            Consequently, the pandemic has highlighted the lack of existing solutions for training physical lab learning skills 
            outside the laboratory setting, which can be a major detriment to student learning.
            </p>
            <h3>problem</h3>
            <p>
              Students found it <strong>difficult to engage with new concepts</strong> and 
              process the material through watching video recordings alone.
            </p> 
            <h3>gaining user insights</h3>
              <p>A survey was conducted to better understand how students felt about the situation. 
                I analyzed the data from the student survey, and I came up with a persona
                to illustrate the user needs:</p>
              <div className="persona">
                <div>
                  <h4>story</h4>
                  Timothy is a university student taking classes remotely at home. Timothy is a visual and kinetic learner, and 
                  the recent shift to virtual classes has made it hard for him to stay focused. 
                  <h4>desires & needs</h4>
                  <ul>• direct interation to help him process the material</ul>
                  <ul>• break from virtual recording to avoid zoom fatigue</ul>
                  <h4>pain points</h4>
                  <ul>• loses focus watching videos of other people preforming experiments</ul>
                  <ul>• difficult to comprehend and memorize the tools for future labs</ul>
                </div>
              </div>
            <h3>solution</h3>
              <p>The goal was to create <strong>a gamefied learning app </strong> 
                that allows students to interact with the material better through AR. 
                This app would replace Zoom recordings of lab procedures and the prework required for lab experiments.
              </p>
              <h4>key features:</h4>
              <ul>Augumented Reality Labs</ul>
              <ul>Earn medals/awards</ul>
              <ul>Earn grades for class</ul>
            <br/>
            <br/>
            {/* ideation */}
            <div className='mid'> <h2>Ideation and Prototyping</h2> </div>
            <p>First, I mapped out the basic <strong>user flow</strong> to get an idea of how a user would interact with the app.</p>
            <img src={flow} alt="user flow" style={{maxWidth: "100%"}}/>
            <p>I then created a <strong>low fidelity wireframe</strong> to understand the general layout of the app.</p>
            <img src={lofi} alt="low-fidelity" style={{maxWidth: "100%"}}/>
            <p>From the low fidelity wireframe, my team and I brainstormed different potential interfaces. </p> <p>Below are a snapshot from each design: </p>
            <br/>
            <div className='phones'>
              <img src={q2l2} style={{maxHeight: "98%"}} alt="Q2L design 1 - home screen"/>
              <img src={q2l1} alt="Q2L design 2 - all quests"/>
              <img src={q2l3} alt="Q2L design 3 - my labs"/>
            </div>
            <br/>
            <p>I conducted an <strong>A/B test </strong> through Google Forms to determine which interface would be most preferred and intuitive for users. 
            From the data collected, and after undergoing a couple more iterations, we were able to combine ideas from all three designs into the final prototype. </p> 
            <br/>
            <br/>
            <div className='mid'> <h2>Brand Design</h2> </div>
            <p>
              Because we had multiple designers working on this project, I created a <strong>style guide</strong> to better establish the brand of this 
              new product and to keep our different ideas cohesive. 
            </p>
            <h3>colors</h3>
            <p>
              I analyzed the market to determined that the colors blue and white were most commonly associated with science labs.
              I decided to build upon that to create a blue-based palette in order to keep the functionality of Quest2learn intuitive,
              with a yellow accent color to add contrast and liveliness to the color palette.
            </p>
            <div className='mid'><img src={colors} alt=""/></div> 
            <h3>typography</h3>
            <div className='two-col'>
              <p>
                Quest2learn uses the Mulish font. The font is a Sans Serif typeface and was chosen for its simplicity. 
                Simplicity was important to the quest2learn brand beecause it would serve a wide range of students and readability is 
                major component of this educational app.
              </p>
              <img src={types} alt=""/>
            </div>
            
            <h3>icons</h3>
            <p>
              I also contributed to the illustration of icons for the app. 
              The icons utilizes a flat design in order to align the app with existing trends.
            </p>
            <div className='mid'>
              <img src={icons} alt="flat icon design" style={{maxWidth: "80%", textAlign: "center"}} />
            </div>


            <br/>
            <br/>
            <div className='mid'><h2>Final Product</h2></div>
            <p>Below are my contributions to the final <strong>high fidelity wireframe.</strong> </p>
            <img src={hifi} alt="" style={{maxWidth: "100%"}}/>
            <div style={{textAlign: "center"}}>
              <a class="btn" target="_blank" href="https://www.figma.com/proto/ATZhy9p7u6kSO1IkGP3jXC/Untitled?node-id=0%3A7&scaling=scale-down&page-id=0%3A1&starting-point-node-id=0%3A7">
                play with the prototype
              </a>
              <br/>
            </div>
            <br/>
              <p>
                For the final design, I created a fun, but professional, feel by incorporating bright colors and icons 
                into the design while maintaining a simple interface.  
              </p>
              <div className='mid'>
                <img src={full} alt="" style={{maxWidth: "100%"}}/>
              </div>

              <p>
                The clean design, limited palette, fun icons, and progress indicators all aim to prevent cognitive overload 
                as students progress through lessons.
              </p>

              <div className='mid'>
                <img src={sc1} alt="" style={{maxWidth: "100%"}}/>
                <img src={sc2} alt="" style={{maxWidth: "100%"}}/>
              </div>


            
            <br/>
            <br/>
            <div className='mid'><h2>Conclusions</h2></div>
            <h3>lesson learned</h3>
            <p>Working with a team of different designers and developers, I realized the importance of establishing a style guide in order to keep things cohesive. 
              In a big team, it is also important to effectively communicate your ideas, which mockups are very useful for, and to keep an open mind. </p>
            <p>Overall, as this was my first product design project, I had a lot of fun teaching myself UX research and finding out the official terms for 
              processes that I naturally did, such as creating low-fidelity wireframes and A/B testing for user preferences. </p>
            <h3>looking ahead</h3>
            <p>
              After the development of our prototype, quest2learn won the Digital Education & Learning Technology Acceleration (DELTA) Grant. Quest2learn is working closely with 
              professors at Johns Hopkins to conduct usability tests and content development as it gets incorporrated into classrooms. As Quest2learn gets expanded into local high schools, 
              more testing would need to be conducted to determine the needs specific to k-12 students and instructors. 
              Additionally, the interface from the instructor's perspective still needs to be developed. 
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Case;