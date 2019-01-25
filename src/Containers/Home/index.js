import React from "react";
import ReactDOM from "react-dom";
import "./home.less";
import topLogo from "../../images/media/OCAT-Foreground-02.png"
import bottomLogo from "../../images/media/mobile-home-screen.png"
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
            src={topLogo} 
            alt="OCAT-logo" 
            className="show"
          />
          <img 
            src={bottomLogo}
            alt="OCAT-logo" 
            className="hide"
          />
        </div>
      <div className='fill-height fill-grey pad'>
        <div id="output" className="top">
          <h3>Tony Bush</h3>
            <p>
              St Louis based Graphic & Web Designer with over 
              five years of industry experience, he enjoys creating 
              new content and meeting clients needs. 
              Tony’s skills include a grasp of HTML, CSS, & Javascript. 
              Plus knowledge in JQuery, AJAX  and RESTful API integration mixed 
              in with a wealth of design poise. Projects big or small 
              Tony has what's needed to take your brand to the next level.
            </p>
        </div>
      <div>
        <button>Contact Me</button>
      </div>
      
     </div>

    
  </div>


    );
  }
}
