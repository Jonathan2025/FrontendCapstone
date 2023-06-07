import { useParams, useNavigate } from "react-router-dom"
import React, {useContext} from 'react'
import AuthContext from "../../context/AuthContext"
import MediaContainer from "../../components/Media/MediaContainer"
import "../../styling/CSS/userProfiles/ShowUser.css"
const ShowUserProfile = (props) => {
    let {user} = useContext(AuthContext)
    console.log(user)
    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const userProfiles = props.userProfiles
    const userProfile = userProfiles.find((u) => u.id == id)
    console.log("this is the userprofile that we get back", userProfile)

    //linking edit btn to edit route
    const editForm = (e) => {
        navigate(`/api/userProfiles/${userProfile.id}/update`, {state:{userProfile}}) // now when we access the edit form we want to pass the specific userprofile that is being edited
    }

    //handling for delete
    const removeUserProfile = (e) => {
        e.preventDefault()
        props.deleteUserProfile(userProfile.id);
        navigate("/api/userProfiles");
    }


    return (
        <div>
            <div className="row">
                <div className="col s12 m6">
                <h4>{userProfile.first_name + ' ' + userProfile.last_name}</h4>
                    <p>{userProfile.beltLevel}</p>
                    <p>{userProfile.userDesc}</p>
                    <p>{userProfile.martialArt}</p>
                    <p>{userProfile.address}</p>
                    <p>{userProfile.city}</p>
                    <p>{userProfile.state}</p>
                    <p>{userProfile.zip_code}</p>
                    <p>{userProfile.username}</p>
                </div>
                <div className="col s12 m6">
                    <MediaContainer uploadFile={userProfile.picture}/>
                </div>


            </div>


            
            
            


            <div className="editDltButtons">
              <button className='editBtn' onClick={editForm}>Edit UserProfile</button>
              <button className='deleteBtn' onClick = {removeUserProfile}>Delete User Profile</button>
            </div>


        </div>
    )
}

export default ShowUserProfile