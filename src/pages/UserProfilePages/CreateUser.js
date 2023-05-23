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