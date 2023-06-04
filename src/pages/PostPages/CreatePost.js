import { useState } from "react"
import { useNavigate } from "react-router-dom"
import '../../styling/CSS/CreatePost.css'


const CreatePost = (props) => {
    const navigate = useNavigate()
    const [file, setFile] = useState(null)
    // state to hold formData
    const [newForm, setNewForm] = useState({
        title: "",
        category: "",
        postDesc: "",
        upload: "",
    })

    const handleChange = (event) => {
      if (event.target.name === 'upload') {
        const selectedFile = event.target.files[0];
        console.log(selectedFile.name);
    
        const fileSizeLimit = 100 * 1024 * 1024; // 100 MB in bytes
    
        if (selectedFile.size > fileSizeLimit) {
          console.log('File size exceeds the limit.');
          alert('Please select a file smaller than 100 MB.')
          event.target.value = null // Reset the file upload input
        } else if (selectedFile.name && selectedFile.name.includes(' ')) {
          console.log('File name contains spaces.');
          alert('Please make sure the file name has no spaces.')
          event.target.value = null // Reset the file upload input
        
        } else if (selectedFile.name && selectedFile.name.includes(' ') && (selectedFile.size > fileSizeLimit)) {
          alert('Please make sure the file name has no spaces AND that its smaller than 100 MB')
          event.target.value = null // Reset the file upload input
        } else {
          // File meets the requirements
          console.log('File meets the requirements.');
          setNewForm({ ...newForm, [event.target.name]: selectedFile });
        }
      } else {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
      }
    }

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault()
        alert("Please allow between 1-2 minutes for larger files")
        props.createPost(newForm);
        navigate("/api/posts")
    }


    return (
        <div class="createPostPage row"> 
              <div className="centerCreatePost col s12 m6 l4">
                
                <form className="createPostForm col s12 " onSubmit={handleSubmit}>
                  <h3 className="createPostHeader">Create a Post</h3>
                    
                    <div className="row">
                    <div className="createPostInputDiv input-field col s12">
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

                    <div className="row">
                    <div className="createPostInputDiv input-field col s12">
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

                    <div className="row">
                    <div className="createPostInputDiv input-field col s12">
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

                    <div className="row">
                    <div className="createPostInputDiv input-field col s12">
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
                    <button className="createPostBtn btn red waves-effect waves-light btn-large" type="submit" name="action">Create Post </button>
                
                </form>
            </div>
        </div>




        
       
 
    )
}

export default CreatePost

