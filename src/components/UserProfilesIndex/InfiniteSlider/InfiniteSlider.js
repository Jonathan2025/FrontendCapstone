import React from 'react'
import { InfiniteSliderData } from './InfiniteSliderData'
import "../InfiniteSlider/InfiniteSlider.css"
const InfiniteSlider = () => {
  return (
   
    // The InfiniteSlider will be build from the pictures in the InfiniteSliderData
    <div class="infinitePhotoSlider">
        <div className="infinitePhotoSlide-track">
            {InfiniteSliderData.map((slide, index) => {
                return(
                    <div className="infinitePhotoSlide">
                        <img src = {slide.image} alt="slide" className ="infinitePhoto" />
                     </div>
                )
            })}
            
        </div>
    </div>

  )
}

export default InfiniteSlider