import React from "react";
import { Link } from 'react-router-dom';

class Topbar extends React.Component {
  render() {
    return(
      <div className="topbar logo">
        <Link to="/portfolio" spy={true} smooth={true}> jeanie w. fung </Link> 
      </div>
    )
  }
}

export default Topbar;