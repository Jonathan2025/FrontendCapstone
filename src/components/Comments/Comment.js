import React from "react"
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi"
import CommentForm from "./CommentForm"


// pass in the comment props 
const Comment = ({comment, userId, username, affectedComment, setAffectedComment, addComment, parentId = null, updateComment, deleteComment, replies}) => {
    const isUserLoggedIn = Boolean(username) // username refers to the user that is loggedin. We need to check to see if the user is logged in 
    const commentBelongsToUser = username === comment.username // the logged-in user MUST have the same username as the user who made the comment
    
    // create an isEditing 
    const isEditing = 
        affectedComment && 
        affectedComment.type === 'editing' && 
        affectedComment.id === comment.id

    return(
        <div className="">
            <div className="">
                {/* Now this is where the comment will be displayed and we pass in the user who made the comment */}
                <img
                    src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_640.png"
                    alt="user profile" 
                    className="rounded-circle"
                    style={{ width: '4rem', height: 'auto' }}
                    />
                </div>
                <div className="">
                    {/* here will be comment information such as the date the comment was made*/}
                    <h5 className="text-primary">{comment.username}</h5>
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

                  





                    {/* user must be the same user as the one who made the comment to be able to edit and delete it */}
                    {commentBelongsToUser && (
                            <>
                            <button 
                                className="btn btn-outline-secondary"
                                type="button"
                                onClick={() => setAffectedComment({type: 'editing', id:comment.id})}>
                                <FiEdit2 />
                                <span>Edit</span>
                            </button>
                            <button 
                                className=""
                                type="button"
                                onClick={() => deleteComment(comment.id)}>
                                <FiTrash />
                                <span>Delete</span>
                            </button>
                            </>
                        )}
                
            </div>
        </div>
                  

    
    )
}

export default Comment