// This passes the Media URL to the HoverVideo Component
import HoverVideo from "./HoverVideoPlayer"
import "./PreviewVideoSlider.css"

const PreviewMediaContainer = (props) => {
    const uploadFile =  props.uploadFile
    const decodedMediaUrl = decodeURIComponent(uploadFile) // we need to fix the url a bit and do some cleaning
    const correctedMediaUrl = decodedMediaUrl.replace(/^\/[^/]+/, 'https:/')// we will use regex to fix the url
    const correctedMediaUrlLower = correctedMediaUrl.toLowerCase()

  return (
    <div>
    {uploadFile && (
        // Check the file extension and render the appropriate media tag
        (correctedMediaUrlLower.endsWith('.png') || correctedMediaUrlLower.endsWith('.jpg') || correctedMediaUrlLower.endsWith('.jpeg')) ? (
            <img className ="indexPostImg" src={correctedMediaUrl} alt="Post Image" />
            // if the element is a video then we pass it to the HoverVideo Component
        ) : correctedMediaUrlLower.endsWith('.mp4') ? (
            <HoverVideo videoUrl={correctedMediaUrl} />
        ) : (
            <p>Unsupported file format</p>
        )
    )}
</div>
  )
}

export default PreviewMediaContainer