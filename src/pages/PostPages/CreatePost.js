import { useState } from "react"
import { useNavigate } from "react-router-dom"

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
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    }

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault()
        const file = event.target.upload.files[0]
        console.log("this is the file we get", file)
        props.createPost(newForm);
        navigate("/api/posts")
    }


    return (
        <div className="createForm">
          <h1 className="createFormTitle">Create a Post! </h1>
          <form onSubmit={handleSubmit} encType="multipart/form-data"> 
            <label className="createFormlabel"> Title: </label>  <br/>
                <input
                className="createFormlabel"
                type="text"
                value={newForm.title}
                name="title"
                placeholder="Title"
                onChange={handleChange}
                required
                /><br/>

            <label className="createFormlabel"> Category: </label>  <br/>
                <input
                className="createFormlabel"
                type="text"
                value={newForm.category}
                name="category"
                placeholder="Category"
                onChange={handleChange}
                required
                /><br/>

            <label className="createFormlabel"> Post Description: </label>  <br/>
                <input
                className="createFormlabel"
                type="text"
                value={newForm.postDesc}
                name="postDesc"
                placeholder="PostDesc"
                onChange={handleChange}
                required
                /><br/>

            <label className="createFormlabel"> Upload: </label>  <br/>
                <input
                className="createFormlabel"
                type="file"
                value={newForm.upload}
                name="upload"
                placeholder="File Upload"
                onChange={handleChange}
                required
                /><br/>
             
            <input className="createBtn" type="submit" value="Create Fund" />
          </form>
        </div>
 
    )
}

export default CreatePost

