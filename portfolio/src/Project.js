import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

class Project extends React.Component {
  render() {
    return(
      <div className='project'>
        <div>
          <Link to="/projects/q2l">
            <img></img>
            <div className='text'>
              <h2>quest2learn</h2>
              <p>designing a gamefied laboratory basics app to engage and prepare students for lab work </p>
            </div>
          </Link>
        </div>
        <div>
          <Link to="/projects/semly" className='text'>
            <h2>semesterly</h2>
            <p>connecting students to faculty advisors to better mentorship</p>
          </Link>
        </div>
        <div>

        </div>
      </div>  
    )
  }
}

export default Project;