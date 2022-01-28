import React from 'react';
import '../App.css';
import flow from '../assets/flow_semly.jpg';
import dash from '../assets/semly_dash.png';
import side from "../assets/semly_side.png";
import mockup from '../assets/semly.png';
import am from '../assets/semly_am.png';
import hifi from '../assets/semly_hifi.gif';
import q2l3 from '../assets/q2l_3.png';

class Case extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }

  render() {
    return(
      <div>
        <div>
          {/* project */}
          <div className='header' style={{background: "#ff7878"}}>
            <div className='case'>
              <h1>advising dashboard for semesterly</h1>
              <div/>
              <div>
                <h3>project summary</h3>
                <p style={{ color: "white", fontWeight: "300"}}>
                  
                  Semesterly is a leader in streamlining the course scheduling experience. 
                  However, after planning out a schedule, the process of sharing it with advisors for approval is bit more steps.
                  I was interested in seeing how we could simplify the use of multiple apps and turn
                  Semesterly into an all-in-one platform. 

                </p>
              </div>
            </div>
            <div className='more'>
              <div>
                <h4>role</h4> 
                <ul>product designer</ul> 
                <ul>frontend developer</ul>
              </div>
              <div>
                <h4>timeline</h4>
                <ul>march 2021</ul>
              </div>
              <div>
                <h4>tasks</h4>
                <ul>ux/ui design</ul>
                <ul>market research</ul>
                <ul>prototyping</ul>
                <ul>developing</ul>
              </div>
              <div>
                <h4>team</h4>
                <ul>Mia B.</ul>
                <ul>James W.</ul>
                <ul>Rishi B.</ul>
              </div>
            </div>
          </div>
          <img src={mockup} alt="" style={{position: "relative", borderRadius: "10px", maxWidth: "50%", margin: 10}}></img>

          {/* background */}
          <div className='main'>
            <h3>context</h3>
              <p>
                Students are required to send their planned course schedules to their advisors for approval 
                before the start of each semester. However, although Semesterly has made it easier to organize
                students' schedule, <strong> the advising process remains tedious.</strong> Students are required to 
                copy their planned classes from Semesterly over to a four year plan, draft up an email, and 
                meet with their advisors to get their courses approved before resgistration. 
                I was interested to see how we could use Semesterly to simplify the process and improve communication
                between faculty mentors and student mentees.
              </p> 
            <h3>gaining user insights</h3>
              <p>
                First, I created and sent out a survey to better understand how students and faculty members 
                felt about the situation. I was able to get responses from 70 students and 9 advisors. 
                I used an <strong>affinity map</strong> to organize the responses from students and advisors to determine 
                what points we should focus on when brainstorming possible new features. 
              </p> 
              <div style={{textAlign: "center"}}>
                <img src={am} style={{maxWidth: "90%"}} alt="four grousp: scheduling, connecting with advisors, managing documents, tracking courses for graduation" />
              </div>
            <h3>findings</h3>
              <p>
                I found that the advising process is time-consuming for both students and advisors,
                with about 80% of students reporting that they face some significant issues with the advising process.
                Students also feel that they aren't receiving the support they need.   
              </p>

              <p>
                We then had a brainstorming session to discuss some possible ideas
                and what features would be needed in order to meet user needs. When we presented the ideas
                to our user-base, we found that: 
              </p>
              <ol> •  91.3% of students noted that they would like to easily share their schedules</ol>
              <ol> •  96% of students stated that they would like some type of degree planning feature</ol>
              <ol> •  70% of students would appreciate a chat or comment system to communicate with advisors</ol>

              <p>
                I analyzed the data from the student survey, and I 
                constructed two <strong>user personas </strong> to synthesize our insights and paint a narrative for the most prominent issues that we observed.

              </p>
              <div className="persona">
                <div>
                  <h4>story</h4>
                  Annie is a junior at Johns Hopkins studying Computer Science and Psychology. 
                  Annie hopes to graduate a semester early to save on tuition costs. 
                  <h4>desires & needs</h4>
                  <ul>open communication with both advisors to plan her courses</ul>
                  <ul></ul>
                  <h4>pain points</h4>
                  <ul>cumbersome to repeatedly share and explain her course selection to both advisors</ul>
                  <ul>difficult to schedule appointments with advisors over email</ul>
                </div>
                <div>
                  <h4>story</h4>
                  Dr. Lin is a professor and faculty advisor. He meets with 70 students in between preparing his courses 
                  each semester to make sure they are on track to graduate.
                  <h4>desires & needs</h4>
                  <ul></ul>
                  <h4>pain points</h4>
                  <ul>students do not always align their courses to their degree requirements</ul>
                  <ul>difficult to keep track of advisee meetings through multiple platforms</ul>
                </div>
              </div>
            <h3>solution</h3>
              <p>
                The goal was to create <strong> an advising dashbaord </strong> 
                that allows advisors directly view their planned and previous courses on Semesterly, 
                as well as a <strong>chat feature</strong>. 
              </p>

            {/* ideation */}
            <h2>Ideation and Prototyping</h2>
            <p>First, I mapped out the basic <strong>user flow</strong> to get an idea of how a user would interact with the app.</p>
            <div style={{textAlign: "center"}}><img src={flow} alt="user flow" style={{maxWidth: "80%"}}/></div>
            <p>I then brainstormed how this new feature might be incorporated into the exisiting platform, and how the interface might differ for students versus advisors.</p>
            <br/>
            <div className="two-col"> 
              <div> 
                <img src={side} alt="" style={{maxWidth: "90%"}}/> 
                <p> 
                  <strong>Design Idea 1:</strong> Users can easily access the advisor chat 
                  by toggling between it and the exisitng side bar. 
                  The chat is to the right of the planned semester schedule.</p>
              </div>
              <div> 
                <img src={dash} alt="" style={{maxWidth: "90%"}}/>
                <p> 
                  <strong>Design Idea 2:</strong> The advising dashboard becomes a new page altogether. 
                  The space to the left of the chat is freed up to display a potential 4 year plan.
                </p>
              </div>
            </div>
            <br/>
            <p>
              After presenting the ideas to the rest of the team, we discussed which features would be most probable as well as impactful to implement within our given timeline. 
            </p> 
            <p>From here, I adjusted the design to create a <strong>high fidelity wireframe</strong> for a <strong>minimum viable product</strong> that would work with the exisiting platform.</p> 

            <h2>Final Product</h2>
            <div style={{textAlign: "center"}}>
              <img src={hifi} alt="" style={{maxWidth: "80%"}}/>
            </div>
            <p>simple color palette to decrease cognitive load. (show palette) easy to read sanscript.
              icons to keep a fun and engaging intereface. feels immersive in lab setting
              easily switch between labs and courses. 
              awards to stay motivated to play and learn.
              recieve grades to be sent to professors.
              progress bars to see what labs are still unfinished. Allows for breaks inbetween lessons.
            </p>

            <h2>Implementation</h2> 
              <p>The advising dashboard is implemented using ReactJS and Redux for the frontend, and Django for the backend. </p>

            <h2>Final Conclusions</h2>
              <h3>lesson learned</h3>
              <p> 
                This project was unique to me because I waas not just a product designer, but also a developer. I was able to 
                experience first-hand the benefits of having a working prototype to use as reference when creating a new product. 
                It also challenged me to first consider if there was a way to reuse exisiting components rather than starting from scratch.
                Not only does this make it simplier to implement, it also helps to keep the overall site looking cohesive. 
              </p>
              <p>
              
              </p>
              <h3>looking ahead</h3>
              <p>
                 
              </p>
            <br/>
          </div>
        </div>
      </div>
    )
  }
}

export default Case;