import React from 'react'
import section1Photo from "../../styling/Images/24.jpeg"
const Section1 = () => {
  return (
  
    <div className="homeSectionPage row">
    <div className="col s12 m6 l6 center-align">
      <div className="homeSectionTexts">
        <h2 className="homeSectionParagraph">Learn from world-class instructors, exclusively on KickFlix </h2>
      </div>
    </div>


    <div className="col s12 m6 l6">
        <img className='homeSectionsPhotos' src={section1Photo} />
      </div>
    </div>

  )
}

export default Section1