import React from 'react'
import"../../styling/CSS/posts/ShowPost.css"

const MediaContainer = (props) => {
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
                // Check the file extension and render the appropriate media tag
                (correctedMediaUrlLower.endsWith('.png') || correctedMediaUrlLower.endsWith('.jpg') || correctedMediaUrlLower.endsWith('.jpeg')) ? (
                    <img className ="mediaSource profilePic" src={correctedMediaUrl} alt="Post Image" />
                ) : correctedMediaUrlLower.endsWith('.mov') ? (
                    <video className ="mediaSource" controls>
                        <source src={correctedMediaUrl} type="video/quicktime" />
                    </video>
                ) : correctedMediaUrlLower.endsWith('.mp4') ? (
                    <video  className ="mediaSource" controls>
                        <source src={correctedMediaUrl} type="video/mp4" />
                    </video>
                ) : (
                    <p>Unsupported file format</p>
                )
            )}
        </div>
    )
}



export default MediaContainer