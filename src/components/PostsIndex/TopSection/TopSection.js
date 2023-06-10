import HoverVideoPlayer from 'react-hover-video-player'
import {TopSectionData} from "./TopSectionData"
import LazyLoad from "react-lazyload"
import "./TopSection.css"
const TopSection = () => {
  return (
    

    <LazyLoad once className="topVideoContainer">
          <div className='content'> 
            <h2>Hello there this is you captain speaking</h2>
        </div>
    <HoverVideoPlayer
      

      className="topVideoPreview"
      videoSrc={process.env.REACT_APP_TOP_SECTION_VIDEO}
      style={{ width: '100%' }}
      videoStyle={{ height: '650px', borderRadius: '20px', position: 'relative' }}
      muted={false}
      pausedOverlay={
        <div className='pausedOverlay'>
          <div className='content'>
            <h2>Hello there, this is your captain speaking</h2>
          </div>
          <img
            className='topVideoImage'
            src={TopSectionData[0].image}
            alt="TopSectionImg"
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              borderRadius: '20px',
            }}
          />
        </div>
      }
    />
  </LazyLoad>
  )
}

export default TopSection