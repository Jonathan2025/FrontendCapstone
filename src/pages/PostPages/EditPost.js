import { useState } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"

const EditPost = (props) => {
    const location = useLocation()
    const post = location.state.post //in showPost.js we passed in the state:post so we can get the specific post being edited in less code
    const navigate = useNavigate()

    const [editForm, setEditForm] = useState(post)

    const handleChange = (event) => {
        event.preventDefault()
        // whatever gets changed, we change it to event.target.value
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }

    const handleSubmit = (event) => {
        event.preventDefault() 
        // updatePost takes 2 arguments: an object representing the edited form data and the id of the post being edited
        props.updatePost(editForm, post.id)
        // redirect people back to show page AFTER the user edits the information
        navigate(`/api/posts/${post.id}`);
    }

    return (
        <div className="editPost">
            <div className="editPostForm">
                <h1>Edit {post.title}?</h1>

                <form onSubmit={handleSubmit}>
                    <label>Title: </label><br/>
                        <input
                            type="text"
                            value={editForm.title}
                            name="title"
                            placeholder="Post Title"
                            onChange={handleChange}
                            required
                        /><br/>

                    <label>Category: </label><br/>
                        <input
                            type="text"
                            value={editForm.category}
                            name="category"
                            placeholder="Post Category"
                            onChange={handleChange}
                            required
                        /><br/>

                    <label>Post Description: </label><br/>
                        <input
                            type="text"
                            value={editForm.postDesc}
                            name="postDesc"
                            placeholder="Post description"
                            onChange={handleChange}
                            required
                        /><br/>

                    <label>Upload: </label><br/>
                        <input
                            type="text"
                            value={editForm.upload}
                            name="upload"
                            placeholder="Post Upload File"
                            onChange={handleChange}
                            required
                        /><br/>

            
            
                    <input type="submit" value="Update Post" className="editPostBtn"/>
                </form>



            </div>
        </div>
    )
}

export default EditPost