import React from 'react';
import '../App.css';
import flow from '../assets/flow.jpg';
import lofi from '../assets/lofi.jpg';
import mockup from '../assets/ucr_mockup.png';
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
                  UCredit 
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
          <div className='main'>
          <img src={mockup} alt="" style={{borderRadius: "10px", maxWidth: "80%", margin: 10}}></img>

            <p>
              I'm still working on this project. Check back later to see the progress!
            </p>
            <br/>
        </div>
        </div>
      </div>
    )
  }
}

export default Case;