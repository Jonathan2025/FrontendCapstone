import React from 'react'
import devicesPhoto from '../../styling/Images/devices.png'
const Section2 = () => {
  return (
    <div className="homeSectionPage row">
    <div className="col s12 m6 l6 center-align">
      <div className="homeSectionsTexts">
        <h2>Enjoy tutorials, clips, and more on online devices</h2>
      </div>
    </div>


    <div className="col s12 m6 l6">
        <img className='homeSectionsPhotos' src={devicesPhoto} />
      </div>
    </div>
  )
}

export default Section2