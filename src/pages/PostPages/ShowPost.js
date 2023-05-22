import React from 'react'
import { useParams, useNavigate } from "react-router-dom"

const ShowPost = (props) => {

    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const posts = props.posts
    const post = posts.find((p) => p.id == id)

    console.log("this is post", post)
    console.log(post.title)

    //   });
    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{post.category}</h2>
            <p>{post.postDesc}</p>


        </div>
    )
}

export default ShowPost