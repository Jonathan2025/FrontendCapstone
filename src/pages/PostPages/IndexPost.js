import React from 'react'
import { Link } from 'react-router-dom'
import PostMediaContainer from '../../components/Media/PostMediaContainer'
import PreviewMediaContainer from '../../components/PostsIndex/VideoSlider/PreviewMediaContainer'

const IndexPost = (props) => {

    //loaded function
    const loaded = () => {
        return (
          
          <div className="containerIndex">
            <Link to="/api/posts/create">Create</Link>
            {props.posts.map((post) => (
              <div key={post.id}>
                <Link to={`/api/posts/${post.id}`}>
                  <h2>{post.title}</h2>
                </Link>

                {/* <PostMediaContainer className="mediaContainer" uploadFile={post.upload} /> */}
                <PreviewMediaContainer uploadFile={post.upload}/>
              </div>
            ))}
          </div>
        )
      }

    const loading = () => {
        return <h1>Loading... </h1> 
    }

    return (props.posts ? loaded() : loading())
}

export default IndexPost