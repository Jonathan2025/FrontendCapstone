import React from 'react'
import"../../styling/CSS/ShowPost.css"

const MediaContainer = (props) => {
    const uploadFile =  props.uploadFile
    const decodedMediaUrl = decodeURIComponent(uploadFile) // we need to fix the url a bit and do some cleaning
    const correctedMediaUrl = decodedMediaUrl.replace(/^\/[^/]+/, 'https:/') // we will use regex to fix the url


    return (
        <div>
            {uploadFile && (
                // Check the file extension and render the appropriate media tag
                (correctedMediaUrl.endsWith('.png') || correctedMediaUrl.endsWith('.jpg') || correctedMediaUrl.endsWith('.jpeg')) ? (
                    <img className ="mediaSource" src={correctedMediaUrl} alt="Post Image" />
                ) : correctedMediaUrl.endsWith('.mov') ? (
                    <video className ="mediaSource" controls>
                        <source src={correctedMediaUrl} type="video/quicktime" />
                    </video>
                ) : correctedMediaUrl.endsWith('.mp4') ? (
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