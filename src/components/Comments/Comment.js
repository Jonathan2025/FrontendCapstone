import React from "react"
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi"
import CommentForm from "./CommentForm"


// pass in the comment props 
const Comment = ({comment, loginUserId, affectedComment, setAffectedComment, addComment, parentId = null, updateComment, deleteComment, replies}) => {
    
    const isUserLoggedIn = Boolean(loginUserId) // We need to check to see if the user is logged in 
    const commentBelongsToUser = loginUserId === comment.user // the logged-in user MUST have the same user id as the user who made 
    
    const isReplying =  affectedComment &&  // in order to reply, the comment must be affected and it must be a reply type
                        affectedComment.type === 'replying' && 
                        affectedComment._id === comment._id 

    const isEditing =   affectedComment && 
                        affectedComment.type === 'editing' && 
                        affectedComment._id === comment._id
    
    const repliedCommentID = parentId ? parentId :comment._id // create a replied comment ID which is equal to parentID. If the parentID is not null, then set the replied comment ID to parentID else set to comment._id
    const replyOnUserID = comment.user._id // reply on userID will be the user id of the comment

    return(
        <div class="d-flex align-items-start bg-light p-3 mb-3 border rounded border-primary">
            <div class="col-auto">

           {/* Now this is where the comment will be displayed and we pass in the user who made the comment */}
            {/* here i will add a person icon */}
                <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    alt="user profile" 
                    className="rounded-circle"
                    style={{ width: '4rem', height: 'auto' }}
                    />
                </div>
                <div class="col mx-3">
                    {/* here will be comment information such as the date the comment was made*/}
                    <h5 class="text-primary">{comment.user}</h5>
                    <span className="commentDate">
                        {new Date(comment.createdAt).toLocaleDateString("en-US", {
                            day:"numeric",
                            month: "short",
                            year: "numeric",
                            hour: "2-digit",
                            minute:"2-digit"
                        })}
                    </span>
                    {/* If not editing then can render the comment description */}
                    {!isEditing && (
                        <p className="">{comment.desc}</p>
                    )}
                    {/* If we are editing the comment, then render the comment form and we want to show the initial text  */}
                    {isEditing && (
                        <CommentForm btnLabel="Update" formSubmitHandler={(value) => updateComment(value, comment._id)}
                        formCancelHandler={() => setAffectedComment(null)}
                        initialText ={comment.desc}
                        />
                    )}
                     {/* seeing if user is logged in before we allow them to reply to a comment */}
                    <div class="d-flex gap-3 text-secondary text-sm mt-3 mb-3">
                    {/* <div class=""> */}
                        {isUserLoggedIn && (
                            <button
                                className="btn btn-outline-primary"
                                type="button" 
                                onClick={() => setAffectedComment({type: 'replying', _id:comment._id})}>
                                <FiMessageSquare />
                                <span>Reply</span>
                            </button>
                        )}

                        {/* user must be the same user as the one who made the comment to be able to edit and delete it */}
                        {commentBelongsToUser && (
                            <>
                            <button 
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={() => setAffectedComment({type: 'editing', _id:comment._id})}>
                                <FiEdit2 />
                                <span>Edit</span>
                            </button>
                            <button 
                                className="btn btn-outline-danger"
                                type="button"
                                onClick={() => deleteComment(comment._id)}>
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
                            formSubmitHandler={(value) => 
                                addComment(value, repliedCommentID, replyOnUserID)
                            }
                        
                        //add in the formCancelHandler 
                        formCancelHandler={() => setAffectedComment(null)}
                        />
                        )}
                        {replies.length > 0 && (
                        <div>
                        {replies.slice(0).reverse().map((reply)=> (
                            <Comment
                            key={reply._id} 
                            addComment={addComment} 
                            affectedComment = {affectedComment} 
                            setAffectedComment={setAffectedComment} 
                            comment = {reply}
                            deleteComment={deleteComment}
                            loginUserId={loginUserId}
                            replies={[]} // to avoid too many nested comments we just want one level. So one parent level and then the rest of the replies are on one level
                            updateComment={updateComment}
                            parentId={comment._id}
                            />
                        ))}

                    </div>
                )}
            </div>
        </div>

    
    )
}

export default Comment