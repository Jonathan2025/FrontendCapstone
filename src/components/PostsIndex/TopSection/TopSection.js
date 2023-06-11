import HoverVideoPlayer from 'react-hover-video-player'
import {TopSectionData} from "./TopSectionData"
import LazyLoad from "react-lazyload"
import "./TopSection.css"
import { FaPlay } from 'react-icons/fa'
import { FiInfo } from 'react-icons/fi'
import warriorLogo from '../../../styling/Images/Cinemax_Warrior.webp'

const TopSection = () => {

  return (
  <LazyLoad once className="topVideoContainer">
    <div style={{ position: 'relative' }}>
      <HoverVideoPlayer
        className="topVideoPreview"
        videoSrc={process.env.REACT_APP_TOP_SECTION_VIDEO}
        style={{ width: '100%'}}
        videoStyle={{ height:'70vh', borderRadius: '20px', position: 'relative' }}
        muted={false}

        // When video isnt playing, an image will be shown (pausedOverLay)
        pausedOverlay={
          <div className="pausedOverlay">
            <img
              className='topVideoImage'
              src={TopSectionData[0].image}
              alt="TopSectionImg"
              style={{
                width: '100%',
                height: '100%',
                borderRadius: '20px',
                backgroundPosition: 'center',
                position: 'absolute',
                objectFit: 'cover',
                display:'block',
                top: 0,
                left: 0,
              }}
            />
          </div>
        }
        />
        {/* Contents of the video */}
          <div className="banner_contents">
            <img src={warriorLogo} alt="Warrior Logo" className="banner_logo" />
            <div className="banner_buttons"> 
              <button className="banner_play_button">
                <FaPlay className='playIcon'/> Play
              </button>
              <button className="banner_info_button">
                <FiInfo className='infoIcon' /> Info
              </button>
            </div>
          </div>
        </div>
      </LazyLoad>
  )
}

export default TopSection