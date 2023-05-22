import { useState } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"

const EditPost = (props) => {
    const location = useLocation();
    const post = location.state.post //in showPost.js we passed in the state:post so we can get the specific post being edited in less code

    console.log("this will be the post to update", post)



    return (
        <div>EditPost</div>
    )
}

export default EditPost