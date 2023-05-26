import React from 'react'
import { useState, useEffect } from 'react'


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
            <div className="">
                <textarea 
                    className=""
                    rows="4" 
                    placeholder="Leave Your Comments here..." 
                    value = {value}
                    onChange={(e) => setValue(e.target.value)}
                />
            <div className="commentSubmitBtnDiv">
                {formCancelHandler && (
                    <button onClick={formCancelHandler}
                        className=""
                        > 
                        Cancel
                    </button>
                )}
                    <button type="submit" 
                        className=""
                        >
                        {btnLabel}
                    </button>
                </div>
            </div>
        </form>
        )
}

export default CommentForm