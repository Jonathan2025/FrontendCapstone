import { useParams, useNavigate } from "react-router-dom"
import React, {useContext} from 'react'
import AuthContext from "../../context/AuthContext"
import CommentsContainer from "../../components/Comments/CommentsContainer"

const ShowPost = (props) => {
    let {user} = useContext(AuthContext) // lets get the user who is logged in 
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const posts = props.posts
    const post = posts.find((p) => p.id == id)

    //linking edit btn to edit route
    const editForm = (e) => {
        navigate(`/api/posts/${post.id}/update`, {state:{post}}) // now when we access the edit form we want to pass the specific post that is being edited
    }

    //handling for delete
    const removePost = (e) => {
        e.preventDefault()
        props.deletePost(post.id);
        navigate("/api/posts");
    }



    return (
        <div>
            {/* we need to make sure the post is loaded first before we can access its properties */}
            {post ? (
            <div>
                <h1>{post.title}</h1>
                <h2>{post.category}</h2>
                <p>{post.postDesc}</p>

                <div className="editDltButtons">
                <button className='editBtn' onClick={editForm}>Edit Post</button>
                <button className='deleteBtn' onClick={removePost}>Delete Post</button>
                </div>

                <div>
                 <CommentsContainer userId={user.user_id} username={user.username} comments={post.comments} postId={post.id}/>
                </div>
            </div>
            ) : (
            // otherwise show a loading screen
            <p>Loading...</p>
            )}
        </div>
    )
}

export default ShowPost