import { useParams, useNavigate } from "react-router-dom"
import React, {useContext, useEffect} from 'react'
import AuthContext from "../../context/AuthContext"
import MediaContainer from "../../components/Media/PostMediaContainer"
import "../../styling/CSS/userProfiles/ShowUser.css"
import OpenLayerMap from "../../components/Map/Map"


const ShowUserProfile = (props) => {
   

    let {user} = useContext(AuthContext)
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
            {/* we need to make sure that the userProfile is loaded before we can access its prperties */}
        {userProfile ? (
        <div className="showProfilePage">

            <div className="row ">
                <div className="profilePicDiv col s12 m6">
                    <MediaContainer uploadFile={userProfile.picture}/>
                </div>
                <div className="userProfileInfo col s12 m5">
                    <h4>{userProfile.first_name + ' ' + userProfile.last_name}</h4>
                    <h5>Username: {userProfile.username}</h5>
                    <h5>Rank: {userProfile.beltLevel}</h5>
                    <h5>Martial Art: {userProfile.martialArt}</h5>
                </div>
            </div>

            <div className="userbio row">
                    <h5>User Biography</h5>
                    <p className="userProfileDesc"> {userProfile.userDesc}</p>
            </div>

            <div className="row ">

                <div className="userLocationInfo col s12 m5">
                    <h3>Main Training Institution</h3>
                    <h5>{userProfile.address}</h5>
                    <h5>{userProfile.city + ', ' + userProfile.state + ' ' + userProfile.zip_code}</h5>
                   
                    <h5>{userProfile.zip_code}</h5>
                </div>

                <div className=" col s12 m6">
                    <OpenLayerMap address={userProfile.address} city={userProfile.city} state={userProfile.state} zip={userProfile.zip_code}/>
                </div>

               
            </div>


            <div className="editDltButtonsUserProfile">
                   
                   {userProfile.username === user.username ? (
                       <>
                           <button className='btn waves-effect waves-light blue editBtn' onClick={editForm}>Edit Post</button>
                           <button className='btn waves-effect waves-light red deleteBtn' onClick={removeUserProfile}>Delete Post</button>
                       </>
                   ): null}
               </div>
            

        </div>


           ):(
            // otherwise show a loading screen
            <p>Loading...</p>


           )}

        </div>
    )
}

export default ShowUserProfile