import React from "react"
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi"
import CommentForm from "./CommentForm"


// pass in the comment props 
const Comment = ({comment, userId, username, affectedComment, setAffectedComment, addComment, parentId = null, updateComment, deleteComment, replies}) => {
    const isUserLoggedIn = Boolean(username) // username refers to the user that is loggedin. We need to check to see if the user is logged in 
    const commentBelongsToUser = username === comment.username // the logged-in user MUST have the same username as the user who made the comment
    
    // isEditing will be a set of conditions used below to determine if a comment is being edited
    const isEditing = 
        affectedComment && 
        affectedComment.type === 'editing' && 
        affectedComment.id === comment.id

    // isReplying will be a set of conditions used to determine if a comment is being replied on
    const isReplying = 
        affectedComment && 
        affectedComment.type === 'replying' && 
        affectedComment.id === comment.id 
    const replyOnUserID = comment.username // user of the replied comment will be the username of the comment  

    return(
        <div className="commentBox">
          
                <div className="commentContainer">
                    <div className="commentImageAndUser">
                    {/* Now this is where the comment will be displayed and we pass in the user who made the comment */}
                    <img
                        src="https://ih1.redbubble.net/image.618427277.3222/flat,800x800,075,f.u2.jpg"
                        alt="user profile" 
                        className="commentUserImg"
                        style={{ width: '4rem', height: 'auto' }}
                        />
                    <h5 className="commentUserName">{comment.username}</h5>
                    </div>
                    {/* here will be comment information such as the date the comment was made*/}
                    
                    <span className="commentDate">
                        {new Date(comment.created).toLocaleDateString("en-US", {
                            day:"numeric",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute:"2-digit"
                        })}
                    </span>
                    {/* If not editing then can render the comment description */}
                    {!isEditing && (
                        <p className="">{comment.commentDesc}</p>
                    )}
                    {/* If we are editing the comment, then render the comment form and we want to show the initial text  */}
                    {isEditing && (
                        <CommentForm btnLabel="Update" formSubmitHandler={(value) => updateComment(value, comment.id)}
                        formCancelHandler={() => setAffectedComment(null)}
                        initialText ={comment.commentDesc}
                        />
                    )}

                    {/* User should be logged in before we allow them to reply to a comment */}
                    <div class="commentBtns">
                        {isUserLoggedIn && (
                            <button
                                className="btn"
                                type="button" 
                                onClick={() => setAffectedComment({type: 'replying', id:comment.id})}>
                                <FiMessageSquare />
                                <span>Reply</span>
                            </button>
                        )}

                    {/* user must be the same user as the one who made the comment to be able to edit and delete it */}
                    {commentBelongsToUser && (
                            <>
                            <button 
                                className="btn blue"
                                type="button"
                                onClick={() => setAffectedComment({type: 'editing', id:comment.id})}>
                                <FiEdit2 />
                                <span>Edit</span>
                            </button>
                            <button 
                                className="btn red"
                                type="button"
                                onClick={() => deleteComment(comment.id)}>
                                <FiTrash />
                                <span>Delete</span>
                            </button>
                            </>
                        )}
                    </div>

                           {/* If the user is replying then render the comment form and then pass in the addComment function*/}
                           {isReplying && (
                            <CommentForm
                            btnLabel="Reply" 
                            formSubmitHandler={(value) => {
                                addComment(value, comment.id, replyOnUserID)
                            }}
                        
                        //add in the formCancelHandler 
                        formCancelHandler={() => setAffectedComment(null)}
                        />
                        )}
                        {replies.length > 0 && 
                        (
                        <div className="replyComment">
                        {replies.slice(0).reverse().map((reply)=> (
                            <Comment
                            key={reply.id} 
                            addComment={addComment} 
                            affectedComment = {affectedComment} 
                            setAffectedComment={setAffectedComment} 
                            comment = {reply}
                            deleteComment={deleteComment}
                            username={username}
                            replies={[]} // to avoid too many nested comments we just want one level. So one parent level and then the rest of the replies are on one level
                            updateComment={updateComment}
                            parentId={comment.id}
                            />
                        )
                        
                        )}

                    </div>
                )}
            </div>
        </div>
    )
}

export default Comment