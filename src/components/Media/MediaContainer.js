import React from 'react'

const MediaContainer = (props) => {
    const uploadFile =  props.uploadFile
    const decodedMediaUrl = decodeURIComponent(uploadFile) // we need to fix the url a bit and do some cleaning
    const correctedMediaUrl = decodedMediaUrl.substring(1) // get rid of the shash / in the beginning
    
    return (
        <div>
            {uploadFile && (
                // Check the file extension and render the appropriate media tag
                (correctedMediaUrl.endsWith('.png') || correctedMediaUrl.endsWith('.jpg') || correctedMediaUrl.endsWith('.jpeg')) ? (
                    <img src={correctedMediaUrl} alt="Post Image" />
                ) : correctedMediaUrl.endsWith('.mov') ? (
                    <video controls>
                        <source src={correctedMediaUrl} type="video/quicktime" />
                    </video>
                ) : correctedMediaUrl.endsWith('.mp4') ? (
                    <video controls>
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