import { useState } from "react"
import { useNavigate } from "react-router-dom"
import {useContext} from 'react'
import AuthContext from "../../context/AuthContext"
import Select from 'react-select'


const CreateUserProfile = (props) => {
    const navigate = useNavigate()
    let {user} = useContext(AuthContext) // lets get the user who is logged in 
    // when a user is logged in, obviously it will be the one creating a profile
    
    console.log("creating", props)

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

    // handleChange function for form
    // const handleChange = (event) => {
    //     setNewForm({ ...newForm, [event.target.name]: event.target.value });
    // }


    // handle change function for the form, we need to add some checks to our picture upload
    const handleChange = (event) => {
        console.log("hey there", newForm)
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



    const handleMartialArtSelect = (selectedMartialArt) => {
        setNewForm({ ...newForm, martialArt: selectedMartialArt })
      }

    const handleStateSelect = (selectedState) => {
        console.log("this is going to be the selected state", selectedState.value)
        console.log("heres the form", newForm)
        setNewForm({ ...newForm, state: selectedState});
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

    const martialArtOptions = [
        { value: 'Just Learning', label: 'Just Learning' },
        { value: 'Taekwondo', label: 'Taekwondo' },
        { value: 'Boxing', label: 'Boxing' },
        { value: 'MMA', label: 'MMA' },
        { value: 'Karate', label: 'Karate' },
        { value: 'Jiu-Jitsu', label: 'Jiu-Jitsu' },
        { value: 'Judo', label: 'Judo' },
        { value: 'Kickboxing', label: 'Kickboxing' },
        { value: 'Vovinam', label: 'Vovinam' },
        { value: 'Muay Thai', label: 'Muay Thai' },
        { value: 'Boxing', label: 'Boxing' },
        { value: 'Tai Chi', label: 'Tai Chi' },
        { value: 'Other', label: 'Other' },
      ]

      const stateOptions = [
        { value: 'AL', label: 'Alabama' },
        { value: 'AK', label: 'Alaska' },
        { value: 'AZ', label: 'Arizona' },
        { value: 'AR', label: 'Arkansas' },
        { value: 'CA', label: 'California' },
        { value: 'CO', label: 'Colorado' },
        { value: 'CT', label: 'Connecticut' },
        { value: 'DE', label: 'Delaware' },
        { value: 'FL', label: 'Florida' },
        { value: 'GA', label: 'Georgia' },
        { value: 'HI', label: 'Hawaii' },
        { value: 'ID', label: 'Idaho' },
        { value: 'IL', label: 'Illinois' },
        { value: 'IN', label: 'Indiana' },
        { value: 'IA', label: 'Iowa' },
        { value: 'KS', label: 'Kansas' },
        { value: 'KY', label: 'Kentucky' },
        { value: 'LA', label: 'Louisiana' },
        { value: 'ME', label: 'Maine' },
        { value: 'MD', label: 'Maryland' },
        { value: 'MA', label: 'Massachusetts' },
        { value: 'MI', label: 'Michigan' },
        { value: 'MN', label: 'Minnesota' },
        { value: 'MS', label: 'Mississippi' },
        { value: 'MO', label: 'Missouri' },
        { value: 'MT', label: 'Montana' },
        { value: 'NE', label: 'Nebraska' },
        { value: 'NV', label: 'Nevada' },
        { value: 'NH', label: 'New Hampshire' },
        { value: 'NJ', label: 'New Jersey' },
        { value: 'NM', label: 'New Mexico' },
        { value: 'NY', label: 'New York' },
        { value: 'NC', label: 'North Carolina' },
        { value: 'ND', label: 'North Dakota' },
        { value: 'OH', label: 'Ohio' },
        { value: 'OK', label: 'Oklahoma' },
        { value: 'OR', label: 'Oregon' },
        { value: 'PA', label: 'Pennsylvania' },
        { value: 'RI', label: 'Rhode Island' },
        { value: 'SC', label: 'South Carolina' },
        { value: 'SD', label: 'South Dakota' },
        { value: 'TN', label: 'Tennessee' },
        { value: 'TX', label: 'Texas' },
        { value: 'UT', label: 'Utah' },
        { value: 'VT', label: 'Vermont' },
        { value: 'VA', label: 'Virginia' },
        { value: 'WA', label: 'Washington' },
        { value: 'WV', label: 'West Virginia' },
        { value: 'WI', label: 'Wisconsin' },
        { value: 'WY', label: 'Wyoming' },
      ]


    return (

        <div className="createUserProfilePage row"> 
             <div className="col s12 m6 l6 center-align">
                {/* Here we can put something on the left side if we wanted to */}
            </div>

            <div className="col s12 m6 l6">
                <form className = "createUserProfileForm" onSubmit = {handleSubmit}>
                    <h1 className="createFormTitle">Create your User Profile! </h1>

                    <div className = "row" >
                        <div className = "createdUserInputDiv input-field col s12">
                            <input
                                className="createFormlabel"
                                type="text"
                                value={newForm.first_name}
                                name="first_name"
                                placeholder="First Name"
                                onChange={handleChange}
                                required
                            /><br/>
                        </div>
                    </div>

                    <div className = "row" >
                        <div className = "createdUserInputDiv input-field col s12">
                            <input
                                className="createFormlabel"
                                type="text"
                                value={newForm.last_name}
                                name="last_name"
                                placeholder="Last Name"
                                onChange={handleChange}
                                required
                            /><br/>
                        </div>
                    </div>


                    <div className = "row" >
                        <div className = "createdUserInputDiv input-field col s12">
                             <input
                                className="createFormlabel"
                                type="text"
                                value={user.username}
                                name="username"
                                placeholder="Username"
                                readOnly
                                required
                            /><br />
                        </div>
                    </div>
                    
                <div className="row">
                    <div className="createPostInputDiv input-field col s12">
                        <input
                          className="createFormlabel"
                          type="file"
                          name="picture"
                          placeholder="Picture Upload"
                          accept=".jpg, .jpeg, .png"
                          onChange={handleChange}
                          required
                          />
                      </div>
                    </div>






                    <div className = "row" >
                        <div className = "createdUserInputDiv input-field col s12">
                             <input
                                className="createFormlabel"
                                type="text"
                                value={newForm.beltLevel}
                                name="beltLevel"
                                placeholder="Belt Level"
                                onChange={handleChange}
                                required
                            /><br/>
                        </div>
                    </div>

                    {/* <div className = "row" >
                        <div className = "createdUserInputDiv input-field col s12">
                            <input
                                className="createFormlabel"
                                type="text"
                                value={newForm.userDesc}
                                name="userDesc"
                                placeholder="User Description"
                                onChange={handleChange}
                                required
                            /><br/>
                        </div>
                    </div> */}

                    <div className="row">
                    <div className="createUserInputDiv input-field col s12">
                      <textarea
                          className="createFormlabel materialize-textarea"
                          type="text"
                          value={newForm.userDesc}
                          name="userDesc"
                          placeholder="User Description"
                          onChange={handleChange}
                          required
                        ></textarea>
                      </div>
                    </div>


       
                <div className="row">
                    <div className="input-field col s12">
                        <Select
                        className="basic-single"
                        value={newForm.martialArt}
                        name="martialArt"
                        placeholder="Martial Art"
                        onChange={handleMartialArtSelect} // Use handleMartialArtSelect for onChange
                        options={martialArtOptions}
                        labelField="label"
                        valueField="value"
                        required
                        />
                    </div>
                </div>


                <div className = "row" >
                    <div className = "createdUserInputDiv input-field col s12">
                        <input
                            className="createFormlabel"
                            type="text"
                            value={newForm.address}
                            name="address"
                            placeholder="Address"
                            onChange={handleChange}
                            required
                            /><br/>
                        </div>
                    </div>

                <div className = "row" >
                    <div className = "createdUserInputDiv input-field col s12">
                        <input
                            className="createFormlabel"
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
                    <div className = "createdUserInputDiv input-field col s12">
                        <Select
                        className="basic-single"
                        value={newForm.state}
                        name="state"
                        placeholder="State"
                        onChange={handleStateSelect}
                        options={stateOptions}
                        labelField="label"
                        valueField="value"
                        required
                        />
                        </div>
                    </div>
                

                <div className = "row" >
                    <div className = "createdUserInputDiv input-field col s12">
                        <input
                            className="createFormlabel"
                            type="Number"
                            value={newForm.zip_code}
                            name="zip_code"
                            placeholder="Zip Code"
                            onChange={handleChange}
                            required
                        /><br/>
                    </div>
                </div>
                  
                    <input className="createBtn" type="submit" value="Create your User Profile" />

                </form>



            </div>
        </div>
    )
}

export default CreateUserProfile