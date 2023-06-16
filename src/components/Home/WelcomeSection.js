import React from 'react'
import "../../styling/CSS/Home.css"
const WelcomeSection = () => {
  return (
    <div className="welcomeSection">
        <div className="shadingOverImage"></div>
        <div className="welcomeSectionText">
        <div className="row">
            <h2 className="homeSectionParagraph">Welcome to KickFlix!</h2>
        </div>
        <div className="row">
            <h5 className="homeSectionParagraph">The martial arts app for everyone to learn, get motivated, and showcase their skills!</h5>
        </div>
        </div>
    </div>
        
  )
}

export default WelcomeSection