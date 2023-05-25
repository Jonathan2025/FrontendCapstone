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
        window.location.reload()
    }

    return(
        <form onSubmit={submitHandler}>
            <div class="rounded-lg p-4 d-flex flex-column align-items-end bg-white border rounded border-primary">
                <textarea 
                    className="bg-transparent w-100"
                    rows="4" 
                    placeholder="Leave Your Comments here..." 
                    value = {value}
                    onChange={(e) => setValue(e.target.value)}
                />
            <div className="commentSubmitBtnDiv">
                {formCancelHandler && (
                    <button onClick={formCancelHandler}
                        className="btn btn-outline-danger"
                        > 
                        Cancel
                    </button>
                )}
                    <button type="submit" 
                        className="btn btn-outline-primary"
                        >
                        {btnLabel}
                    </button>
                </div>
            </div>
        </form>
        )
}

export default CommentForm