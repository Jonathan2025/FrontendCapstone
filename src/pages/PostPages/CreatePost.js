
import { useNavigate } from "react-router-dom"
import '../../styling/CSS/posts/CreatePost.css'
import {useContext, useState, useEffect} from 'react'
import AuthContext from "../../context/AuthContext"
import Multiselect from "multiselect-react-dropdown"

const CreatePost = (props) => {
    let {user} = useContext(AuthContext) // lets get the user who is logged in 
    let nameOfFilesUploaded = []
    // get the names of all the files already uploaded - want to make sure we dont have any duplicates
    props.posts.forEach((post, index)=> {
      const fileName = post.upload.split('/').pop()
      nameOfFilesUploaded.push(fileName)
    })

    const navigate = useNavigate()
    // state to hold formData
    const [newForm, setNewForm] = useState({
        title: "",
        category: [],
        postDesc: "",
        upload: "",
        username: user.username
    })

    const [category, setCategory] = useState(["Self Defense", "Basics", "Training", "Tutorial", "Beginner", "Intermediate","Advanced", "Jonathan's Originals", "Sparring", "Competition", "Comedy", "Blockbuster", "Thriller" ])
    
    const handleCategorySelect = (selectedCategory) => {
      setNewForm({ ...newForm, category: selectedCategory });
    };
    
    const handleCategoryRemove = (removedCategory) => {
      const updatedCategory = newForm.category.filter(
        (category) => category !== removedCategory
      );
      setNewForm({ ...newForm, category: updatedCategory });
    }
    
    const handleChange = (event) => {
      console.log("hey there", newForm)
      if (event.target.name === 'upload') {
        const selectedFile = event.target.files[0]
        const fileSizeLimit = 100 * 1024 * 1024; // 100 MB in bytes
       
        // File shouldnt be named as a file already uploaded, cant be more than 100 mb and shouldnt have any spaces
        // This is to avoid problems uploading files to azure in the backend
        if ((selectedFile.size > fileSizeLimit) || (selectedFile.name && selectedFile.name.includes(' ')) || (nameOfFilesUploaded.includes(selectedFile.name))){
          if (selectedFile.size > fileSizeLimit) {
            console.log('File size exceeds the limit.')
          } else if (selectedFile.name && selectedFile.name.includes(' ')) {
            alert('Please make sure the file name has no spaces.')
          } else if (nameOfFilesUploaded.includes(selectedFile.name)) {
            alert('Please rename the file as it matches a file already uploaded')
          }
          event.target.value = null // Reset the file upload input
        } else {
          // File meets the requirements
          console.log('File meets the requirements.')
          setNewForm({ ...newForm, [event.target.name]: selectedFile })
        }
      } else {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
      }
    }

  

    const handleSubmit = async(event) => {
        event.preventDefault()
        alert("Please wait for the file to upload. May take 1-2 minutes for larger files")
        await props.createPost(newForm);
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
               
                      <div className="createPostDesc">
                      <Multiselect
                          isObject={false}
                          onRemove={handleCategoryRemove}
                          onSelect={handleCategorySelect}
                          options={category}
                          onChange={handleChange}
                          placeholder="Select a category"
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
                          accept=".jpg, .jpeg, .png, .mp4"
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

