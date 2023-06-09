import React from 'react'
import { Link } from 'react-router-dom'
import PostMediaContainer from '../../components/Media/PostMediaContainer'
import PreviewMediaContainer from '../../components/PostsIndex/VideoSlider/PreviewMediaContainer'
import VideoSlider from '../../components/PostsIndex/VideoSlider/VideoSlider'


const IndexPost = (props) => {

    //loaded function
    const loaded = () => {
        return (
          
          // <div className="containerIndex">
          //   <Link to="/api/posts/create">Create</Link>
          //   {props.posts.map((post) => (
          //     <div key={post.id}>
          //       <Link to={`/api/posts/${post.id}`}>
          //         <h2>{post.title}</h2>
          //       </Link>

 
          //       <PreviewMediaContainer uploadFile={post.upload}/>
          //     </div>
          //   ))}
          // </div>


          <VideoSlider posts={props.posts} /> 
        )
      }

    const loading = () => {
        return <h1>Loading... </h1> 
    }

    return (props.posts ? loaded() : loading())
}

export default IndexPost