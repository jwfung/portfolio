import React from 'react';
import { Link } from 'react-router-dom';
import selfport from "./assets/selfport.png";
import './App.css';

class Menu extends React.Component {
  render() {
    return (
      <div className='left'>
          <div className='logo'>
            <Link to="/portfolio" spy={true} smooth={true}> 
              <img style={{maxWidth: "20%"}} src={selfport}/>
              <br/>
              jeanie w. fung
            </Link> 
          </div>
          <br/>
          <br/>
          <Link to="/portfolio/about" spy={true} smooth={true}> about </Link> 
          <br/>
          <br/>
          <Link to="/portfolio/projects" spy={true} smooth={true}> projects </Link> 
          <br/>
          <br/>
          <a target="_blank" rel="noreferrer" href="https://1drv.ms/w/s!ApAzMnlybCxJl2HKLsEqQXju1_sg?e=mwt5o6"> resume </a> 
          <br/>
      </div>
    );
  }
}

class SideBar  extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      show: false,
      width: 0, 
      height: 0
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this); 
  }

  componentDidMount(){ 
    document.addEventListener('scroll', () => {
      if (window.scrollY > 200) {
        this.setState({show: true})
      }
      else {
        this.setState({show: false})
      }

    });
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  
  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
    console.log(this.state.width)
  }

  sb_open() {
    if (!this.state.open) {
      document.getElementById("mySidebar").style.width = "100vw";
      document.getElementById("mySidebar").style.display = "block";
      console.log("open")
      this.setState({open: true})
    } else {
      document.getElementById("mySidebar").style.display = "none";
      document.getElementById("mySidebar").style.width = "0";

      console.log("close")
      this.setState({open: false})
    }

  }

  render() {
  return(
    <div className={`SideBar ${this.state.show &&'SideBar__color'}`} style={{zIndex: "5"}}>
      {this.state.width > 768 ? <Menu /> :
        <button className="nav" onClick={() => this.sb_open()}>☰</button> 
      }
      <div className="sidebar" style={{display: "none"}} id="mySidebar">
        <Menu/> 
      </div> 
    </div>
    )
  }
}

export default SideBar;