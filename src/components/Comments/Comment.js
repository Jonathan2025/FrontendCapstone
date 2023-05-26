import React from "react"
import { FiMessageSquare, FiEdit2, FiTrash } from "react-icons/fi"
import CommentForm from "./CommentForm"


// pass in the comment props 
const Comment = ({comment, userId, username, affectedComment, setAffectedComment, addComment, parentId = null, updateComment, deleteComment, replies}) => {
    const isUserLoggedIn = Boolean(username) // username refers to the user that is loggedin. We need to check to see if the user is logged in 
    const commentBelongsToUser = username === comment.username // the logged-in user MUST have the same username as the user who made the comment
    console.log(comment)
   

    return(
        <div className="">
            <div className="">
                {/* Now this is where the comment will be displayed and we pass in the user who made the comment */}
                {/* here i will add a person icon */}
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
                        <p className="">{comment.commentDesc}</p>
                    
                    </span>
                     {/* If not editing then can render the comment description */}
            </div>
        </div>
                  

    
    )
}

export default Comment