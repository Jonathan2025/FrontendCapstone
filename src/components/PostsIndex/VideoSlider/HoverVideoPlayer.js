import { useRef } from "react"
import LazyLoad from "react-lazyload";
import HoverVideoPlayer from 'react-hover-video-player'

const HoverVideo = (props) => {
  return (
    // Lazy Load will only load the video if it comes within the view. This is to reduce weight on the page
    <LazyLoad once> 
        <HoverVideoPlayer
            videoSrc={props.videoUrl}
            playbackRangeStart={2} // starts the video at 2.5 seconds
            playbackRangeEnd={5} // end the video at 5 seconds
        />
    </LazyLoad>
  )
}

export default HoverVideo