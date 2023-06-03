import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../../styling/CSS/CreatePost.css'


const CreatePost = (props) => {
    const navigate = useNavigate()

    // state to hold formData
    const [newForm, setNewForm] = useState({
        title: "",
        category: "",
        postDesc: "",
        upload: "",
    })

    // handleChange function for form
    const handleChange = (event) => {
        if (event.target.name === 'upload') {
          setNewForm({ ...newForm, [event.target.name]: event.target.files[0] });
        } else {
          setNewForm({ ...newForm, [event.target.name]: event.target.value });
        }
      }

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault()
        props.createPost(newForm);
        navigate("/api/posts")
    }


    return (
        <div class="createPostPage row"> 
              <div className="centerCreatePost col s12 m6 l4">
                
                <form class="createPostForm col s12 " onSubmit={handleSubmit}>
                  <h3 class="createPostHeader">Create a Post</h3>
                    
                    <div class="row">
                    <div class="createPostInputDiv input-field col s12">
                        <input
                          className="createFormlabel"
                          type="text"
                          value={newForm.title}
                          name="title"
                          placeholder="Title"
                          onChange={handleChange}
                          required
                          />
                      </div>
                    </div>

                    <div class="row">
                    <div class="createPostInputDiv input-field col s12">
                        <input
                          className="createFormlabel"
                          type="text"
                          value={newForm.category}
                          name="category"
                          placeholder="Category"
                          onChange={handleChange}
                          required
                        />
                      </div>
                    </div>

                    <div class="row">
                    <div class="createPostInputDiv input-field col s12">
                      <textarea
                          className="createFormlabel materialize-textarea"
                          type="text"
                          value={newForm.postDesc}
                          name="postDesc"
                          placeholder="PostDesc"
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>

                    <div class="row">
                    <div class="createPostInputDiv input-field col s12">
                        <input
                          className="createFormlabel"
                          type="file"
                          name="upload"
                          placeholder="File Upload"
                          accept=".jpg, .jpeg, .png, .mov, .mp4"
                          onChange={handleChange}
                          required
                          />
                      </div>
                    </div>
                    <button class="createPostBtn btn red waves-effect waves-light btn-large" type="submit" name="action">Create Post </button>
                
                </form>
            </div>
        </div>




        
       
 
    )
}

export default CreatePost

