import { useState } from "react"
import { useParams, useNavigate, useLocation } from "react-router-dom"

const EditUserProfile = (props) => {
    const location = useLocation()
    const userProfile = location.state.userProfile
    const navigate = useNavigate()

    const [editForm, setEditForm] = useState(userProfile)


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
        <div className="editForm">
          <h1 className="editFormTitle">Edit your User Profile! </h1>
          <form onSubmit={handleSubmit}>
            <label className="editFormlabel"> First Name </label>  <br/>
                <input
                className="editFormlabel"
                type="text"
                value={editForm.first_name}
                name="first_name"
                placeholder="First Name"
                onChange={handleChange}
                required
                /><br/>

            <label className="editFormlabel"> Last Name </label>  <br/>
                <input
                className="editFormlabel"
                type="text"
                value={editForm.last_name}
                name="last_name"
                placeholder="Last Name"
                onChange={handleChange}
                required
                /><br/>

            <label className="createFormlabel">Username</label> <br />
                <input
                className="createFormlabel"
                type="text"
                value={editForm.username}
                name="username"
                placeholder="Username"
                readOnly
                required
                />
                <br />

            <label className="editFormlabel"> Belt Level </label>  <br/>
                <input
                className="editFormlabel"
                type="text"
                value={editForm.beltLevel}
                name="beltLevel"
                placeholder="Belt Level"
                onChange={handleChange}
                required
                /><br/>

            <label className="editFormlabel"> User Description </label>  <br/>
                <input
                className="editFormlabel"
                type="text"
                value={editForm.userDesc}
                name="userDesc"
                placeholder="User Description"
                onChange={handleChange}
                required
                /><br/>

            <label className="editFormlabel"> Martial Art </label> <br/>
                <select
                className="editFormlabel"
                value={editForm.martialArt}
                name="martialArt"
                placeholder="Martial Art"
                onChange={handleChange}
                required
                >
                <option value="">Select Martial Art</option>
                <option value="Just Learning!">Just Learning!</option>
                <option value="Taekwondo">Taekwondo</option>
                <option value="Boxing">Boxing</option>
                <option value="MMA">MMA</option>
                <option value="Karate">Karate</option>
                <option value="Jiu-Jitsu">Jiu-Jitsu</option>
                <option value="Judo">Judo</option>
                <option value="Kickboxing">Kickboxing</option>
                <option value="Vovinam">Vovinam</option>
                <option value="Muay Thai">Muay Thai</option>
                <option value="Tai Chi">Tai Chi</option>
                <option value="Other">Other</option>
                </select>
            <br/>

            <label className="editFormlabel"> Address </label>  <br/>
                <input
                className="editFormlabel"
                type="text"
                value={editForm.address}
                name="address"
                placeholder="Address"
                onChange={handleChange}
                required
                /><br/>

            <label className="editFormlabel"> City </label>  <br/>
                <input
                className="editFormlabel"
                type="text"
                value={editForm.city}
                name="city"
                placeholder="City"
                onChange={handleChange}
                required
                /><br/>

            <label className="editFormlabel"> State </label>
            <br/>
                <select
                className="editFormlabel"
                value={editForm.state}
                name="state"
                onChange={handleChange}
                required
                >
                    <option value="">Select State</option>
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
            <br/>
             
            <label className="editFormlabel"> Zip Code </label>  <br/>
                <input
                className="editFormlabel"
                type="Number"
                value={editForm.zip_code}
                name="zip_code"
                placeholder="Zip Code"
                onChange={handleChange}
                required
                /><br/>

    


            <input className="editBtn" type="submit" value="Edit your user profile" />
          </form>
        </div>
 
    )
}

export default EditUserProfile