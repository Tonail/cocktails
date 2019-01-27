import React from "react";
import ReactDOM from "react-dom";
import "./home.less";
import RandomPic from '../../Components/randomPic' 


import desktopLogo from "../../images/media/OCAT-Foreground-02.png"
import mobileLogo from "../../images/media/mobile-home-screen.png"
import parallax from "../../images/media/Background-04.png"
 
export default class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  compoentDidUpdate(prevProps, prevState) {
    console.log(this.props);
  }

  render() {
    return (
     <div 
        className="parallax centered-column" 
        style={{backgroundImage: `url(${parallax})`}} 
     >
        <div className="home-img" >
          <img  
            src={desktopLogo} 
            alt="OCAT-logo" 
            className="desktop"
          />
          <img 
            src={mobileLogo}
            alt="OCAT-logo" 
            className="mobile"
          />
        </div>
      <div className='fill-height width-full fill-grey pad left-column'>
       <h3>Tony Bush</h3>
        <p>
          Welcome to my React playground explore! Things arnt what they seem.
        </p>
        <div>
          <button>Contact Me</button>
        </div>
     </div>
     <RandomPic speed={5000}/>
  </div>
    );
  }
}