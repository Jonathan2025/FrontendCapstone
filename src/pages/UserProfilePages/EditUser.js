import { useState } from "react"
import { useNavigate, useLocation } from "react-router-dom"
// import Select from 'react-select'
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

  

    const handleSubmit = (event) => {
        event.preventDefault() 
        // updatePost takes 2 arguments: an object representing the edited form data and the id of the post being edited
        props.updateUserProfile(editForm, userProfile.id)
        // redirect people back to show page AFTER the user edits the information
        navigate(`/api/userProfiles/${userProfile.id}`);
    }
  


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
                    <div class="input-field col s12 m6">
                        <select className="browser-default select-dropdown"
                            type="text"
                            value={editForm.martialArt}
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
                                <option value="Other">Other</option>
                        </select>
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
                        <div class="input-field col s12 m6">
                            <select className="browser-default select-dropdown"
                                type="text"
                                value={editForm.state}
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