// From the videoUrl from PreviewMediaContainer, HoverVideo will display the actual video
import LazyLoad from "react-lazyload";
import HoverVideoPlayer from 'react-hover-video-player'
import "./PreviewVideoSlider.css"

const HoverVideo = (props) => {
  return (
    // Lazy Load will only load the video if it comes within the view. This is to reduce weight on the page
    <LazyLoad once> 
     
        <HoverVideoPlayer
            
            className = "videoPreview"
            videoSrc={props.videoUrl}
            playbackRangeStart={2} // starts the video at 2.5 seconds
            playbackRangeEnd={5} // end the video at 5 seconds
            style={{ width: '100%', maxWidth: '100%' }}
        />
     
     
    </LazyLoad>
  )
}

export default HoverVideo