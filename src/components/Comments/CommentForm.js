import React from 'react'
import { useState, useEffect } from 'react'
import"../../styling/CSS/posts/ShowPost.css" 

// Here is the commentForm that takes parameters btnLabel and the handlers
const CommentForm = ({
    btnLabel, 
    formSubmitHandler, 
    formCancelHandler = null,
    initialText = "",
    }) => {

    const [value, setValue] = useState(initialText)
    const submitHandler = (e) => {
        e.preventDefault()
        formSubmitHandler(value)
        setValue("")
    }

    return(
        <form onSubmit={submitHandler}>
            <div className="comments">
                <textarea 
                    className="commentTextArea"
                    rows="4" 
                    placeholder="Leave Your Comments here..." 
                    value = {value}
                    onChange={(e) => setValue(e.target.value)}
                />
            <div className="commentSubmitBtnDiv">
                {formCancelHandler && (
                    <button onClick={formCancelHandler}
                        className="waves-effect waves-light btn red"
                        > 
                        Cancel
                    </button>
                )}
                    <button type="submit" 
                        className="waves-effect waves-light btn"
                        >
                        {btnLabel}
                    </button>
                </div>
            </div>
        </form>
        )
}

export default CommentForm