import React from 'react';
import '../App.css';
import flow from '../assets/flow.jpg';
import lofi from '../assets/lofi.jpg';
import mockup from '../assets/quest2learn.png';
import q2l1 from '../assets/q2l_1.png';
import q2l2 from '../assets/q2l_2.png';
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
          <div className='header' style={{background: "#2b70c9"}}>
            <div className='case'>
              <h1>ucredit</h1>
              <div/>
              <div>
                <h3>project summary</h3>
                <p style={{ color: "white", fontWeight: "300"}}>
                  I was interested in seeing how I can apply modern design principles to simplify the existing dashboard.
                </p>
              </div>
            </div>
            <div className='more'>
              <div>
                <h4>role</h4> 
                <ul>product designer</ul> 
                <ul>ux researcher</ul>
              </div>
              <div>
                <h4>timeline</h4>
                <ul>january 2022</ul>
              </div>
              <div>
                <h4>tasks</h4>
                <ul>ux/ui design</ul>
                <ul>prototyping</ul>
              </div>
              <div>
                <h4>tools</h4>
                <ul>figma</ul>
              </div>
            </div>
          </div>
          <img src={mockup} alt="" style={{position: "relative", borderRadius: "10px", maxWidth: "80%", margin: 10}}></img>

          {/* background */}
          <div className='main'>
            <h3>problem</h3>
              <p>
                However, the current design is a bit hard to navigate and includes a lot of flashy icons that
                make it inaccesible to all users. 
                //include before video//
              </p> 
            <h3>gaining user insights</h3>
              <p>               
                I created an <strong> information hierachy </strong> to determine the most important components and determine whic others could be simplified. 
              </p> 

            <h3>findings</h3>
              <p>
                I analyzed the data from the student survey, and I came up with two personas
                to illustrate user needs:
              </p>
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
              </div>
            <h3>solution</h3>
              <p>
                The goal was to create <strong> an advising dashbaord </strong> 
                that allows advisors directly view their planned and previous courses on Semesterly, 
                as well as a <strong>chat feature</strong>. 
              </p>

            {/* ideation */}
            <h2>Ideation and Prototyping</h2>
            
            <p>Speaking with the technical team, we discussed which features would be most possible and most important to implement with our given timeline. 
              From here, I adjusted the design to create a wireframe for a <strong>minimum viable product</strong> that would work with the exisiting platform.</p> 
            <img/>
            <p>
              simple color palette to decrease cognitive load. (show palette)
              check for WCAGG guidelines 
              easy to read sanscript.
              horizontal format to follow the natural reading of left to right, and to view entire year in one page
              Summary of minimized years
            </p>
            <p></p>

            <h2>Final Conclusions</h2>
              <h3>lesson learned</h3>
              <p> 
                This project was unique to me because I waas not just a product designer, but also a developer. I was able to 
                experience first-hand the benefits of having a working prototype to use as reference when creating a new product. 
                It also challenged me to first consider if there was a way to reuse exisiting components rather than starting from scratch.
                Not only does this make it simplier to implement, it also helps to keep the overall site looking cohesive. 
              </p>
              <p>
                Overall, as this was my first product design project, I had a lot of fun teaching myself UX research and finding out the official terms for 
                processes that I naturally did, such as creating low-fidelity wireframes and A/B testing for user preferences. 
              </p>
              <h3>looking ahead</h3>
              <p>
                This project is still in the process of being developed. 
              </p>
            <br/>
          </div>
        </div>
      </div>
    )
  }
}

export default Case;