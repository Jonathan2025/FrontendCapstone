import { useState} from "react"
import { useNavigate, useLocation } from "react-router-dom"
import '../../styling/CSS/EditPost.css'
import Multiselect from "multiselect-react-dropdown"

const EditPost = (props) => {
    const location = useLocation()
    const post = location.state.post //in showPost.js we passed in the state:post so we can get the specific post being edited in less code
    const navigate = useNavigate()

    const [editForm, setEditForm] = useState({
        ...post,
        category: post.category.replace(/[\[\]']/g, '') //when we pass in the post.category data we get an array back so we want to remove unwanted characters with regex
        .split(',') // split to get the items in the array back NOT the characters
      })


    const [category, setCategory] = useState(["Self Defense", "Basics", "Training", "Tutorial", "Beginner", "Intermediate","Advanced", "Jonathan's Originals", "Sparring", "Competition", "Comedy", "Blockbuster", "Thriller" ])

    const handleCategorySelect = (selectedCategory) => {
        setEditForm({ ...editForm, category: selectedCategory })
    }
      
    const handleCategoryRemove = (removedCategory) => {
        const updatedCategory = editForm.category.filter(
        (category) => category !== removedCategory
        )
        setEditForm({ ...editForm, category: updatedCategory })
    }

    const handleChange = (event) => {
        event.preventDefault()
        setEditForm({ ...editForm, [event.target.name]: event.target.value }) // whatever gets changed, we change it to event.target.value
    }

    const handleSubmit = (event) => {
        event.preventDefault() 
        props.updatePost(editForm, post.id)  // updatePost takes 2 arguments: an object representing the edited form data and the id of the post being edited
        navigate(`/api/posts/${post.id}`) // redirect people back to show page AFTER the user edits the information
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
                      <div className="createPostInputDiv">
                      <Multiselect
                          isObject={false}
                          onRemove={handleCategoryRemove}
                          onSelect={handleCategorySelect}
                          options={category}
                          onChange={handleChange}
                          placeholder="Select a category"
                        selectedValues={editForm.category}
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

                    {/* We decided to hide the input field for editForm.upload */}
                    <input type="hidden" name="upload" value={editForm.upload} />
                    <button className="editPostBtn btn red waves-effect waves-light btn-large" type="submit" name="action">Edit Post </button>
                </form>
            </div>
        </div>
    )
}

export default EditPost