import { useState } from "react"
import { useNavigate } from "react-router-dom"

const CreateUserProfile = (props) => {
    const navigate = useNavigate()

    // state to hold formData
    const [newForm, setNewForm] = useState({
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
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
    }

    // handle submit function for form
    const handleSubmit = (event) => {
        event.preventDefault();
        props.createUserProfile(newForm);
        setNewForm({
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
        <div className="createForm">
          <h1 className="createFormTitle">Create your User Profile! </h1>
          <form onSubmit={handleSubmit}>
            <label className="createFormlabel"> First Name </label>  <br/>
                <input
                className="createFormlabel"
                type="text"
                value={newForm.first_name}
                name="first_name"
                placeholder="First Name"
                onChange={handleChange}
                required
                /><br/>

            <label className="createFormlabel"> Last Name </label>  <br/>
                <input
                className="createFormlabel"
                type="text"
                value={newForm.last_name}
                name="last_name"
                placeholder="Last Name"
                onChange={handleChange}
                required
                /><br/>

            <label className="createFormlabel"> Belt Level </label>  <br/>
                <input
                className="createFormlabel"
                type="text"
                value={newForm.beltLevel}
                name="beltLevel"
                placeholder="Belt Level"
                onChange={handleChange}
                required
                /><br/>

            <label className="createFormlabel"> User Description </label>  <br/>
                <input
                className="createFormlabel"
                type="text"
                value={newForm.userDesc}
                name="userDesc"
                placeholder="User Description"
                onChange={handleChange}
                required
                /><br/>

            <label className="createFormlabel"> Martial Art </label> <br/>
                <select
                className="createFormlabel"
                value={newForm.martialArt}
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

            <label className="createFormlabel"> Address </label>  <br/>
                <input
                className="createFormlabel"
                type="text"
                value={newForm.address}
                name="address"
                placeholder="Address"
                onChange={handleChange}
                required
                /><br/>

            <label className="createFormlabel"> City </label>  <br/>
                <input
                className="createFormlabel"
                type="text"
                value={newForm.city}
                name="city"
                placeholder="City"
                onChange={handleChange}
                required
                /><br/>

            <label className="createFormlabel"> State </label>
            <br/>
                <select
                className="createFormlabel"
                value={newForm.state}
                name="state"
                onChange={handleChange}
                required
                >
                <option value="">Select State</option>
                <option value="Alabama">Alabama</option>
                <option value="Alaska">Alaska</option>
                <option value="Arizona">Arizona</option>
                <option value="Arkansas">Arkansas</option>
                <option value="California">California</option>
                <option value="Colorado">Colorado</option>
                <option value="Connecticut">Connecticut</option>
                <option value="Delaware">Delaware</option>
                <option value="Florida">Florida</option>
                <option value="Georgia">Georgia</option>
                <option value="Hawaii">Hawaii</option>
                <option value="Idaho">Idaho</option>
                <option value="Illinois">Illinois</option>
                <option value="Indiana">Indiana</option>
                <option value="Iowa">Iowa</option>
                <option value="Kansas">Kansas</option>
                <option value="Kentucky">Kentucky</option>
                <option value="Louisiana">Louisiana</option>
                <option value="Maine">Maine</option>
                <option value="Maryland">Maryland</option>
                <option value="Massachusetts">Massachusetts</option>
                <option value="Michigan">Michigan</option>
                <option value="Minnesota">Minnesota</option>
                <option value="Mississippi">Mississippi</option>
                <option value="Missouri">Missouri</option>
                <option value="Montana">Montana</option>
                <option value="Nebraska">Nebraska</option>
                <option value="Nevada">Nevada</option>
                <option value="New Hampshire">New Hampshire</option>
                <option value="New Jersey">New Jersey</option>
                <option value="New Mexico">New Mexico</option>
                <option value="New York">New York</option>
                <option value="North Carolina">North Carolina</option>
                <option value="North Dakota">North Dakota</option>
                <option value="Ohio">Ohio</option>
                <option value="Oklahoma">Oklahoma</option>
                <option value="Oregon">Oregon</option>
                <option value="Pennsylvania">Pennsylvania</option>
                <option value="Rhode Island">Rhode Island</option>
                <option value="South Carolina">South Carolina</option>
                <option value="South Dakota">South Dakota</option>
                <option value="Tennessee">Tennessee</option>
                <option value="Texas">Texas</option>
                <option value="Utah">Utah</option>
                <option value="Vermont">Vermont</option>
                <option value="Virginia">Virginia</option>
                <option value="Washington">Washington</option>
                <option value="West Virginia">West Virginia</option>
                <option value="Wisconsin">Wisconsin</option>
                <option value="Wyoming">Wyoming</option>
                </select>
            <br/>
             
            <label className="createFormlabel"> Zip Code </label>  <br/>
                <input
                className="createFormlabel"
                type="Number"
                value={newForm.zip_code}
                name="zip_code"
                placeholder="Zip Code"
                onChange={handleChange}
                required
                /><br/>

    


            <input className="createBtn" type="submit" value="Create your User Profile" />
          </form>
        </div>
 
    )
}

export default CreateUserProfile