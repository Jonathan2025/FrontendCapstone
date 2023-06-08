import "../../components/UserProfilesIndex/PictureSlider/PictureSlider.css"
const UserMediaContainer = (props) => {
    const uploadFile =  props.uploadFile
    const decodedMediaUrl = decodeURIComponent(uploadFile) // we need to fix the url a bit and do some cleaning
    const correctedMediaUrl = decodedMediaUrl.replace(/^\/[^/]+/, 'https:/')// we will use regex to fix the url
    const correctedMediaUrlLower = correctedMediaUrl.toLowerCase()
    console.log(uploadFile)
    console.log(decodedMediaUrl) 
    console.log(correctedMediaUrl)
   
    return (
        <div>
            {uploadFile && (
                <img className ="userPicture" src={correctedMediaUrl} alt="Post Image" />
            )}
        </div>
    )
}


export default UserMediaContainer