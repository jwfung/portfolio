import React from 'react';
import '../App.css';
import Topbar from '../Topbar';
import ProjectList from './ProjectList';


class Project extends React.Component {
  componentDidMount() {
    window.scrollTo(0,0);
  }
  
  render() {
    return(
      <div className='body'>
        <Topbar/>
        <div className='right'>
          <br/>
          <br/>
          <br/>
           <ProjectList/>
        </div>
       
      </div>
    )
  }
}

export default Project;