import { useParams, useNavigate } from "react-router-dom"
import React, {useContext} from 'react'
import AuthContext from "../../context/AuthContext"
import CommentsContainer from "../../components/Comments/CommentsContainer"
import MediaContainer from "../../components/Media/MediaContainer"
import"../../styling/CSS/ShowPost.css"

const ShowPost = (props) => {
    let {user} = useContext(AuthContext) // lets get the user who is logged in 
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const posts = props.posts
    const post = posts.find((p) => p.id == id)
    console.log("here is the post", post)

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

            <div className = "showPostPage row ">
                <div className="showPostMedia row">
                    {/* Render the media upload component based on the file extension, pass in the upload */}
                    <MediaContainer className="mediaContainer" uploadFile={post.upload} />
                </div>

               <div className = "showPostHeader row">
                <h2 className = "showPostTitle">{post.title}</h2>
                <h3 className = "showPostCategory">{post.category}</h3>
               </div>

            <div className ="showPostInformation">
               <div className = "showPostUser row">
                <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    alt="user profile" 
                    className="postUserImg"
                    />
                <h3 className="postUser">{post.user} FAKE USER</h3>
               </div>

                
                
                <p>{post.postDesc}</p>
                <p>Posted on {post.created}</p>
                </div>

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