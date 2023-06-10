import React from 'react'
import { Link } from 'react-router-dom'
import PostMediaContainer from '../../components/Media/PostMediaContainer'
import PreviewMediaContainer from '../../components/PostsIndex/VideoSlider/PreviewMediaContainer'
import VideoSlider from '../../components/PostsIndex/VideoSlider/VideoSlider'
import TopSection from '../../components/PostsIndex/TopSection/TopSection'


const IndexPost = (props) => {

    //loaded function
    const loaded = () => {
        return (
          <>
       
            <TopSection className='topSectionComponent'/>
       
            
            <VideoSlider posts={props.posts} /> 
          </>
        )
      }

    const loading = () => {
        return <h1>Loading... </h1> 
    }

    return (props.posts ? loaded() : loading())
}

export default IndexPost