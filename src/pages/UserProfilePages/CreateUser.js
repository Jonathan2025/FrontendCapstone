import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useContext} from 'react'
import AuthContext from "../../context/AuthContext"
import "../../styling/CSS/userProfiles/CreateUser.css"

const CreateUserProfile = (props) => {
    const navigate = useNavigate()
    let {user} = useContext(AuthContext) // lets get the user who is logged in 
    
    let nameOfFilesUploaded = []
    // get the names of all the files already uploaded - want to make sure we dont have any duplicates
    props.userProfiles.forEach((userProfile, index)=> {
      const fileName = userProfile.picture.split('/').pop()
      nameOfFilesUploaded.push(fileName)
    })
    

    // state to hold formData
    const [newForm, setNewForm] = useState({
        username: user.username,
        first_name: "",
        last_name: "",
        beltLevel: "",
        userDesc: "",
        martialArt: "",
        address: "",
        city: "",
        state: "",
        zip_code: "",
    })

    // handle change function for the form, we need to add some checks to our picture upload
    const handleChange = (event) => {
        if (event.target.name === 'picture') {
          const selectedFile = event.target.files[0]
          const fileSizeLimit = 10 * 1024 * 1024; // 10 MB in bytes
         
          // File shouldnt be named as a file already uploaded, cant be more than 10 mb and shouldnt have any spaces. This is to avoid problems uploading files to azure in the backend
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

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createUserProfile(newForm);
        setNewForm({
            username: user.username,
            first_name: "",
            last_name: "",
            beltLevel: "",
            userDesc: "",
            martialArt: "",
            address: "",
            city: "",
            state: "",
            zip_code: "",
        })
        navigate("/api/userProfiles")
    }

    return (

        <div className="createUserProfilePage row"> 
             <div className="centerCreateUser  col s12 m6 l6">
                <form className = "createUserProfileForm" onSubmit = {handleSubmit}>
                    <h1 className="createUserProfileTitle">Create a Profile! </h1>

                    <div className="row">
                        <div className="createUserInputDiv input-field col s12 m6">
                            <input
                                className="createUserFormlabel"
                                type="text"
                                value={newForm.first_name}
                                name="first_name"
                                placeholder="First Name"
                                onChange={handleChange}
                                required
                            />
                         
                        </div>
                        <div className="createUserInputDiv input-field col s12 m6">
                            <input
                                className="createUserFormlabel"
                                type="text"
                                value={newForm.last_name}
                                name="last_name"
                                placeholder="Last Name"
                                onChange={handleChange}
                                required
                                />
                                
                            </div>
                    </div>
                    
                    <div className = "row" >
                        <div className = "createUserInputDiv input-field col s12 m6">
                             <input
                                className="createUserFormlabel"
                                type="text"
                                value={user.username}
                                name="username"
                                placeholder="Username"
                                readOnly
                                required
                            /><br />
                        </div>
                
                        <div className="createUserInputDiv input-field col s12 m6">
                            <input
                            className="createUserFormlabel"
                            type="file"
                            name="picture"
                            placeholder="Picture Upload"
                            accept=".jpg, .jpeg, .png"
                            onChange={handleChange}
                            required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div class="input-field col s12 m6">
                            <select className="browser-default select-dropdown"
                                type="text"
                                value={newForm.martialArt}
                                name="martialArt"
                                onChange={handleChange}
                                required
                            >
                                <option value="" disabled selected>Martial Art</option>
                                <option value="Just Learning">Just Learning</option>
                                <option value="Taekwondo">Taekwondo</option>
                                <option value="Boxing">Boxing</option>
                                <option value="MMA">MMA</option>
                                <option value="Karate">Karate</option>
                                <option value="Jiu-Jitsu">Jiu-Jitsu</option>
                                <option value="Judo">Judo</option>
                                <option value="Kickboxing">Kickboxing</option>
                                <option value="Vovinam">Vovinam</option>
                                <option value="Muay Thai">Muay Thai</option>
                                <option value="Boxing">Boxing</option>
                                <option value="Tai Chi">Tai Chi</option>
                                <option value="Kung Fu">Kung Fu</option>
                                <option value="Other">Other</option>
                            </select>
                        </div>
                        <div className = "createUserInputDiv input-field col s12 m6">
                             <input
                                className="createUserFormlabel"
                                type="text"
                                value={newForm.beltLevel}
                                name="beltLevel"
                                placeholder="Belt Level"
                                onChange={handleChange}
                                required
                            /><br/>
                        </div>
                    </div>

                    <div className="row">
                        <div className="createUserInputDiv input-field col s12">
                            <textarea
                                className="createUserFormlabel materialize-textarea"
                                type="text"
                                value={newForm.userDesc}
                                name="userDesc"
                                placeholder="User Description"
                                onChange={handleChange}
                                required
                                ></textarea>
                        </div>
                    </div>


       
                


                    <div className = "row" >
                        <div className = "createUserInputDiv input-field col s12 m6">
                            <input
                                className="createUserFormlabel"
                                type="text"
                                value={newForm.address}
                                name="address"
                                placeholder="Address"
                                onChange={handleChange}
                                required
                                /><br/>
                        </div>
                  
                        <div className = "createUserInputDiv input-field col s12 m6">
                            <input
                                className="createUserFormlabel"
                                type="text"
                                value={newForm.city}
                                name="city"
                                placeholder="City"
                                onChange={handleChange}
                                required
                            /><br/>
                        </div>
                    </div>

                    <div className = "row" >
                        <div class="input-field col s12 m6">
                            <select className="browser-default select-dropdown"
                                type="text"
                                value={newForm.state}
                                name="state"
                                onChange={handleChange}
                                required
                                >
                                <option value="" disabled selected>State</option>
                                <option value="AL">Alabama</option>
                                <option value="AK">Alaska</option>
                                <option value="AZ">Arizona</option>
                                <option value="AR">Arkansas</option>
                                <option value="CA">California</option>
                                <option value="CO">Colorado</option>
                                <option value="CT">Connecticut</option>
                                <option value="DE">Delaware</option>
                                <option value="FL">Florida</option>
                                <option value="GA">Georgia</option>
                                <option value="HI">Hawaii</option>
                                <option value="ID">Idaho</option>
                                <option value="IL">Illinois</option>
                                <option value="IN">Indiana</option>
                                <option value="IA">Iowa</option>
                                <option value="KS">Kansas</option>
                                <option value="KY">Kentucky</option>
                                <option value="LA">Louisiana</option>
                                <option value="ME">Maine</option>
                                <option value="MD">Maryland</option>
                                <option value="MA">Massachusetts</option>
                                <option value="MI">Michigan</option>
                                <option value="MN">Minnesota</option>
                                <option value="MS">Mississippi</option>
                                <option value="MO">Missouri</option>
                                <option value="MT">Montana</option>
                                <option value="NE">Nebraska</option>
                                <option value="NV">Nevada</option>
                                <option value="NH">New Hampshire</option>
                                <option value="NJ">New Jersey</option>
                                <option value="NM">New Mexico</option>
                                <option value="NY">New York</option>
                                <option value="NC">North Carolina</option>
                                <option value="ND">North Dakota</option>
                                <option value="OH">Ohio</option>
                                <option value="OK">Oklahoma</option>
                                <option value="OR">Oregon</option>
                                <option value="PA">Pennsylvania</option>
                                <option value="RI">Rhode Island</option>
                                <option value="SC">South Carolina</option>
                                <option value="SD">South Dakota</option>
                                <option value="TN">Tennessee</option>
                                <option value="TX">Texas</option>
                                <option value="UT">Utah</option>
                                <option value="VT">Vermont</option>
                                <option value="VA">Virginia</option>
                                <option value="WA">Washington</option>
                                <option value="WV">West Virginia</option>
                                <option value="WI">Wisconsin</option>
                                <option value="WY">Wyoming</option>
                            </select>
                        </div>
                  
                        <div className = "createUserInputDiv input-field col s12 m6">
                            <input
                                className="createUserFormlabel"
                                type="Number"
                                value={newForm.zip_code}
                                name="zip_code"
                                placeholder="Zip Code"
                                onChange={handleChange}
                                required
                            /><br/>
                        </div>
                    </div>
                  
                 
                    <button className="createUserBtn btn red waves-effect waves-light btn-large" type="submit" name="action">Create</button>
                </form>



            {/* </div> */}
            </div>
        </div>
    )
}

export default CreateUserProfile