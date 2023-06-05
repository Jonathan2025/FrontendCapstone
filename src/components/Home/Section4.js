import React from 'react'
import dojang from "../../styling/Images/dojang.jpeg"
const Section4 = () => {
  return (
    <div className="homeSectionPage row">
    <div className="col s12 m6 l6 center-align">
      <div className="homeSectionsTexts">
        <h2>View instructors' bios and nearby martial arts schools</h2>
      </div>
    </div>


    <div className="col s12 m6 l6">
        <img className='homeSectionsPhotos' src={dojang} />
      </div>
    </div>
  )
}

export default Section4