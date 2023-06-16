// From the videoUrl from PreviewMediaContainer, HoverVideo will display the actual video
import HoverVideoPlayer from 'react-hover-video-player'
import "./PreviewVideoSlider.css"

const HoverVideo = (props) => {
  return (
        <HoverVideoPlayer
            className = "videoPreview"
            videoSrc={props.videoUrl}
            playbackRangeStart={2} // starts the video at 2.5 seconds
            playbackRangeEnd={5} // end the video at 5 seconds
            style={{ width: '100%', maxWidth: '100%' }}
        />
 
  )
}

export default HoverVideo