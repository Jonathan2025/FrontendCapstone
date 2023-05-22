import React from 'react'
import { Link } from 'react-router-dom'

const IndexPost = (props) => {

    //loaded function
    const loaded = () => {
        return (
            <div className="containerIndex">  
                {props.posts.map((post)=>(
                <div key={post._id} >
                    <Link to={`/api/posts/${post._id}`}>
                        <h2>{post.title}</h2>
                    </Link>
                        <p>{post.postDesc}</p>
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