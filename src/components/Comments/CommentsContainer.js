import { useContext, useEffect, useState } from "react"
import CommentForm from "./CommentForm"
import Comment from "./Comment"
import AuthContext from "../../context/AuthContext"

// Comments container will have the functions responsible for communicating with the backend
const CommentsContainer = ({userId, username, comments, postId}) => {
    console.log("lets see the comments", comments)
    let {authTokens} = useContext(AuthContext) // we want to get the authTokens so then we can use it in the headers of the request
    let accessToken = authTokens.access 
    const [affectedComment, setAffectedComment] = useState(null) // want to select the affected comment

    // Take the information that is submitted and then make a request to the backend to add it
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
            console.error("Error with creating the comment", error)
        }
    }

    // create an empty function for now for update comment 
    const updateCommentHandler = async(value, commentId) =>{
        try{
            const updatedComment ={
                id: commentId,  // commentId needs to be passed else, the handler wont know which comment to update
                commentDesc: value,
            }
            const URL = process.env.REACT_APP_POST_COMMENTS_URL + `${postId}/updateComment`
            
            const response = await fetch(URL, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}`
                },
                body: JSON.stringify(updatedComment)
            })
            const newUpdatedComment = await response.json()
        } catch (error) {
            console.log("Error with updating the comment", error)
        }
        
    }

    // create an empty function for now for delete comment
    const deleteCommentHandler = async(commentId) => {
        try{
            const deleteComment = {
                id: commentId,
                post:postId
            }
            const URL = process.env.REACT_APP_POST_COMMENTS_URL + `${deleteComment.post}/deleteComment`
            const response = await fetch(URL,{
                method:'DELETE',
                headers:{
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${accessToken}` // in the headers we include the access token 
                }, 
                body: JSON.stringify(deleteComment)
            })
            const deletedComment = await response.json()
        } catch (error) {
            console.log("Error with deleting the comment", error)
        }
    }

        return(
            <div className = "commentsContainer">
                <h1> Comment Section </h1>
                {/* The commentForm is called --> The formSubmitHandler points to a function addCommentHandler */}
                <CommentForm btnLabel="Submit" formSubmitHandler={(value) => addCommentHandler(value)}/>
                <div>
                    {/* Map the comments from props and reverse order to get by most recent */}
                    {comments.slice(0).reverse().map((comment) => (
                        <Comment
                        key = {comment.id}
                        comment = {comment}
                        userId = {userId}
                        username = {username}
                        affectedComment={affectedComment} 
                        setAffectedComment={setAffectedComment}
                        addComment= {addCommentHandler}
                        updateComment = {updateCommentHandler}
                        deleteComment = {deleteCommentHandler}
                        replies={comment.replies}
                        />
                    ))}
                    </div>
                </div>
            )
    }

    export default CommentsContainer