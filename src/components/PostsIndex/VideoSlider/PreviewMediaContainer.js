

import HoverVideo from "./HoverVideoPlayer"


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
            <img className ="mediaSource profilePic" src={correctedMediaUrl} alt="Post Image" />


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