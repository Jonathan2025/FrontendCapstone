import { useParams, useNavigate } from "react-router-dom"

const ShowUserProfile = (props) => {

    const params = useParams()
    const navigate = useNavigate()
    const id = params.id
    const userProfiles = props.userProfiles
    const userProfile = userProfiles.find((u) => u.id == id)

    console.log("this is the userprofile", userProfile)




    return (
        <div>
            <h1>{userProfile.first_name + ' ' + userProfile.last_name}</h1>
            <p>{userProfile.__str__}</p>
            <p>{userProfile.beltLevel}</p>
            <p>{userProfile.userDesc}</p>
            <p>{userProfile.martialArt}</p>
            <p>{userProfile.address}</p>
            <p>{userProfile.city}</p>
            <p>{userProfile.state}</p>
            <p>{userProfile.zip_code}</p>
            <p>{userProfile.username}</p>


  


        </div>
    )
}

export default ShowUserProfile