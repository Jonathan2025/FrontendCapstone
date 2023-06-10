import HoverVideoPlayer from 'react-hover-video-player'
import {TopSectionData} from "./TopSectionData"
import LazyLoad from "react-lazyload"
import "./TopSection.css"
const TopSection = () => {
  return (
    

    <LazyLoad once className="topVideoContainer">
       
        <HoverVideoPlayer
            className = "topVideoPreview"
            videoSrc = {process.env.REACT_APP_TOP_SECTION_VIDEO}
            style={{ width: '100%'}}
            videoStyle={{ height: '650px', borderRadius: '20px'}}
            muted={false}
            pausedOverlay={
                <img
                className='topVideoImage'
                src={TopSectionData[0].image}
                alt="TopSectionImg"
                style={{
                    // Make the image expand to cover the video's dimensions
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    borderRadius: '20px',

                }}
                />
            }
        />

      
    </LazyLoad> 
  )
}

export default TopSection