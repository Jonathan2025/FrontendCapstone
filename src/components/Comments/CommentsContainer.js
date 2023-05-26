import { useContext, useEffect, useState } from "react"
import CommentForm from "./CommentForm"
import Comment from "./Comment"
import AuthContext from "../../context/AuthContext"

// the Comments container will have the functions responsible for communicating with the backend

const CommentsContainer = ({userId, username, comments, postId}) => {
    
    let {authTokens} = useContext(AuthContext) // we want to get the authTokens so then we can use it in the headers of the request
    let accessToken = authTokens.access 

    const [affectedComment, setAffectedComment] = useState(null) // want to select the affected comment
    // Essentially we need to match the comment with the parent id (whether the comment is a PARENT or a reply) and the user that it was replied to
    // We will be getting this information from the backend and the comment properties are based on the model from the backend

    // addCommentHandler will take the information that is submitted and then make a request to the backend to add it
    const addCommentHandler = async (value, parent = null) =>{
        try{
            const commentData = {
                userId: userId,
                username: username,
                commentDesc: value,
                parent: parent,
                post: postId, // set the post to be the ID that we get from the props post ID
            }

            const URL = process.env.REACT_APP_POST_COMMENTS_URL + `${commentData.post}/createComment` // make a request to the backend 
            const response = await fetch(URL,{
                method:'POST',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}` // in the headers we include the access token 
                }, 
                body: JSON.stringify(commentData)
            })
            const newComment = await response.json()
        } catch (error){
            console.error(error)
        }
    }

    // create an empty function for now for update comment 
    const updateCommentHandler = () =>{

    }

    // create an empty function for now for delete comment
    const deleteCommentHandler = () => {

    }


        return(
            <div className = "commentsContainer">
                <h1> Comment Section </h1>
                {/* The commentForm is called --> The formSubmitHandler points to a function addCommentHandler */}
                <CommentForm btnLabel="Submit" formSubmitHandler={(value) => addCommentHandler(value)}/>

                {/* we want to pass in the comments that we get from the props and then map them */}
                <div>
                    {/* we want to reverse the order of the comments so that the most recent will be on the top */}
                    {comments.slice(0).reverse().map((comment) => (
                        <Comment
                        key = {comment.id}
                        comment = {comment}
                        userId = {userId}
                        username = {username}
                        affectedComment={affectedComment} 
                        setAffectedComment={setAffectedComment}
                        addComment= {addCommentHandler}
  
                        
                    
                        />
                    ))}
                    </div>
                </div>
            )
    }

    export default CommentsContainer