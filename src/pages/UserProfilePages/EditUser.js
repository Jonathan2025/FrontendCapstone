import { useState } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"
import Select from 'react-select'
import "../../styling/CSS/userProfiles/EditUser.css"



const EditUserProfile = (props) => {
    const location = useLocation()
    const userProfile = location.state.userProfile
    const navigate = useNavigate()

    const [editForm, setEditForm] = useState(userProfile)

    console.log(userProfile)
    console.log("this is edit form", editForm)

    const handleChange = (event) => {
        event.preventDefault()
        // whatever gets changed, we change it to event.target.value
        setEditForm({ ...editForm, [event.target.name]: event.target.value });
    }

    const handleMartialArtSelect = (selectedMartialArt) => {
        setEditForm({ ...editForm, martialArt: selectedMartialArt })
      }

    const handleStateSelect = (selectedState) => {
        setEditForm({ ...editForm, state: selectedState});
      }

    const handleSubmit = (event) => {
        event.preventDefault() 
        // updatePost takes 2 arguments: an object representing the edited form data and the id of the post being edited
        props.updateUserProfile(editForm, userProfile.id)
        // redirect people back to show page AFTER the user edits the information
        navigate(`/api/userProfiles/${userProfile.id}`);
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
        <div className="editUserProfilePage">
            <div className="centerEditUser  col s12 m6 l6">
                <form className= "editUserProfileForm" onSubmit={handleSubmit}>
                <h1 className="editUserTitle">Edit Profile </h1>

                <div className="row">
                    <div className="editUserInputDiv input-field col s12 m6">
                        <input
                            className="editUserFormlabel"
                            type="text"
                            value={editForm.first_name}
                            name="first_name"
                            placeholder="First Name"
                            onChange={handleChange}
                            required
                            /><br/>
                    </div>

                    <div className="editUserInputDiv input-field col s12 m6">
                        <input
                            className="editUserFormlabel"
                            type="text"
                            value={editForm.last_name}
                            name="last_name"
                            placeholder="Last Name"
                            onChange={handleChange}
                            required
                            /><br/>
                    </div>
                </div>



                <div className="row">
                    <div className="editUserInputDiv input-field col s12 m6">
                        <input
                            className="editUserFormlabel"
                            type="text"
                            value={editForm.username}
                            name="username"
                            placeholder="Username"
                            readOnly
                            required
                        /><br/>
                    </div>
                </div>


                <div className="row">
                    <div className="editUserSelectInputDiv input-field col s12 m6">
                        <Select
                            className="basic-single"
                            defaultValue={editForm.martialArt}
                            name="martialArt"
                            placeholder={editForm.martialArt}
                            onChange={handleMartialArtSelect} // Use handleMartialArtSelect for onChange
                            options={martialArtOptions}
                            labelField="label"
                            valueField="value"
                            required
                        />

                    </div>

                    <div className="editUserInputDiv input-field col s12 m6">
                        <input
                            className="editUserFormlabel"
                            type="text"
                            value={editForm.beltLevel}
                            name="beltLevel"
                            placeholder="Belt Level"
                            onChange={handleChange}
                            required
                            /><br/>
                    </div>
                </div>
                


                <div className="row">
                    <div className="editUserInputDiv input-field col s12">
                        <textarea
                            className="editUserFormlabel materialize-textarea"
                            type="text"
                            value={editForm.userDesc}
                            name="userDesc"
                            placeholder="User Description"
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                </div>

                <div className = "row" >
                    <div className = "editUserInputDiv input-field col s12 m6">
                        <input
                            className="editUserFormlabel"
                            type="text"
                            value={editForm.address}
                            name="address"
                            placeholder="Address"
                            onChange={handleChange}
                            required
                            /><br/>
                    </div>
                  
                        <div className = "editUserInputDiv input-field col s12 m6">
                            <input
                                className="editUserFormlabel"
                                type="text"
                                value={editForm.city}
                                name="city"
                                placeholder="City"
                                onChange={handleChange}
                                required
                            /><br/>
                        </div>
                    </div>


                    <div className = "row" >
                        <div className = "editSelectUserInputDiv input-field col s12 m6">
                            <Select
                            className="basic-single"
                            value={editForm.state}
                            name="state"
                            placeholder="State"
                            onChange={handleStateSelect}
                            options={stateOptions}
                            labelField="label"
                            valueField="value"
                            required
                            />
                        </div>
                  
                        <div className = "editUserInputDiv input-field col s12 m6">
                            <input
                                className="editUserFormlabel"
                                type="Number"
                                value={editForm.zip_code}
                                name="zip_code"
                                placeholder="Zip Code"
                                onChange={handleChange}
                                required
                            /><br/>
                        </div>
                    </div>

                    {/* For now in order to avoid too many problems with Azure , we wont allow the user to edit the profile pic they chose */}
                    <input type="hidden" name="picture" value={editForm.picture} /> 
                    <button className="editUserBtn btn red waves-effect waves-light btn-large" type="submit" name="action">Edit</button>
                    
                </form>


            </div>


        </div>











       
 
    )
}

export default EditUserProfile