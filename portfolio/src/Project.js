import React from 'react';
import './App.css';
import { Link } from "react-router-dom";

class Project extends React.Component {
  render() {
    return(
      <div className='project'>
        <div>
          <img></img>
          <Link to="/projects/q2l" className='text'>
            <h2>quest2learn</h2>
            <p>designing a gamefied labatory basics app to engage and prepare students for lab work </p>
          </Link>
        </div>
        <div></div>
        <div></div>
      </div>  
    )
  }
}

export default Project;