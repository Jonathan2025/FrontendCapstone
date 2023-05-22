import React from 'react'
import { useParams, useNavigate } from "react-router-dom"

const ShowPost = (props) => {

    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const posts = props.posts
    const post = posts.find((p) => p.id == id)

    console.log("this is post", post)


    
    //linking edit btn to edit route
    const editForm = (e) => {
        navigate(`/api/posts/${post.id}/update`, {state:{post}}) // now when we access the edit form we want to pass the specific post that is being edited
    }

    return (
        <div>
            <h1>{post.title}</h1>
            <h2>{post.category}</h2>
            <p>{post.postDesc}</p>


            <div className="editDltButtons">
              <button className='editBtn' onClick={editForm}>Edit Post</button>
              {/* <button className='deleteBtn' onClick = {removeFund}>Delete Fund</button> */}
            </div>


        </div>
    )
}

export default ShowPost