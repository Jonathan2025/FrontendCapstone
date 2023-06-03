import { useState } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import '../../styling/CSS/EditPost.css'



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
        <div className="editPostPage row">
            <div className="centerEditPost col s12 m6 l4">
                

                <form className="editPostForm col s12 "onSubmit={handleSubmit}>
                    <h3 className="editPostHeader">Edit {post.title}?</h3>
                    
                    <div className="row">
                    <div className="editPostInputDiv input-field col s12">
                        <input
                            type="text"
                            value={editForm.title}
                            name="title"
                            placeholder="Post Title"
                            onChange={handleChange}
                            required
                        />
                      </div>
                    </div>

                    <div className="row">
                    <div className="editPostInputDiv input-field col s12">
                        <input
                            type="text"
                            value={editForm.category}
                            name="category"
                            placeholder="Post Category"
                            onChange={handleChange}
                            required
                        />
                      </div>
                    </div>

                    <div className="row">
                    <div className="editPostInputDiv input-field col s12">
                      <textarea
                          className="editFormlabel materialize-textarea"
                          type="text"
                          value={editForm.postDesc}
                          name="postDesc"
                          placeholder="PostDesc"
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>

                    {/* Hidden input field for editForm.upload */}
                    <input type="hidden" name="upload" value={editForm.upload} />

             
                    <button className="editPostBtn btn red waves-effect waves-light btn-large" type="submit" name="action">Edit Post </button>
                </form>



            </div>
        </div>
    )
}

export default EditPost