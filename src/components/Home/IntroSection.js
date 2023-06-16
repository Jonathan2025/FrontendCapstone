import React from 'react'
import Jonathan from "../../styling/Images/JonathanKick.jpeg"
const IntroSection= () => {
  return (
    <div className="homeSectionPage row">
    <div className="col s12 m6 l6 center-align">
      <div className="homeSectionTexts">
        <h2 className="homeSectionParagraph"> Get kickin' with Jonathan's Original Taekwondo Tutorials</h2>
      </div>
    </div>


    <div className="col s12 m6 l6">
        <img className='homeSectionsPhotos' src={Jonathan} style={{ width: '30rem', height: 'auto' }}/>
      </div>
    </div>
  )
}

export default IntroSection