import React from 'react';
import ProjectList from './ProjectList';
import Blurb from './Blurb';
import '../App.css';
import '../Home.css';
import Intro from './Intro';
import SideBar from '../Sidebar';


class HomeScreen extends React.Component{
  constructor(props) {
    super(props);
    this.state = {
      isTop: true,
    };
  }

  componentDidMount(){ 
    document.addEventListener('scroll', () => {
      const isTop = window.scrollY < 500;
      if (isTop !== this.state.isTop) {
          this.setState({ isTop })
      }
    });
  }

  render() {
    return(
      <div className='App'>
        <Intro/>
        <div className="wave">
          <Blurb/>
          <svg width="1885" height="1541" viewBox="0 0 1885 1541" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1 886V386.842C18.6153 362.322 232.445 500.296 372.207 502.855C546.91 506.053 504.05 252.087 712.947 248.889C921.844 245.691 979.094 333.939 1171.83 333.939C1364.56 333.939 1468.44 13.7533 1695.37 0.959939C1922.3 -11.8335 1881.07 104.963 1881.07 248.889V886H1Z" fill="#F7EDE3"/>
            <path d="M2.3947 932.092L2.39466 1482.73C20.0243 1503.01 90.2527 1543.03 230.129 1540.92C404.974 1538.27 592.504 1339.94 801.571 1342.58C1010.64 1345.23 1221.72 1482.73 1414.61 1482.73C1675.61 1482.73 1676.01 1340.82 1884 1327.32L1884 932.092L2.3947 932.092Z" fill="#F6BF62"/>
            <path d="M2.39466 1293.31C20.0243 1306.61 90.2527 1332.87 230.129 1331.48C404.974 1329.74 592.504 1199.64 801.571 1201.37C1010.64 1203.11 1221.72 1293.31 1414.61 1293.31C1675.61 1293.31 1676.01 1200.21 1884 1191.36" stroke="#F28583" stroke-width="7"/>
            <path d="M1884 867.38L1884 1287.14C1866.37 1302.6 1796.14 1333.11 1656.27 1331.5C1481.42 1329.48 1293.89 1178.29 1084.82 1180.3C875.756 1182.32 664.674 1287.14 471.784 1287.14C210.787 1287.14 210.383 1178.96 2.39466 1168.67L2.39467 867.38L1884 867.38Z" fill="#F7EDE3"/>
          </svg>
        </div>

        <div className='proj containter'>
          {!this.state.isTop && <SideBar /> }
          
          <div className= "right" >
            <ProjectList/>
          </div>

        </div> 
        

      </div>  
    )
    }
}
export default HomeScreen;