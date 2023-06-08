import { Link } from 'react-router-dom'
import InfiniteSlider from '../../components/UserProfilesIndex/InfiniteSlider/InfiniteSlider'
const IndexUserProfile = (props) => {

    //loaded function
    const loaded = () => {
        return (

          <>
          
          <InfiniteSlider />


          <div className="containerIndex">
            
            {props.userProfiles.map((userProfile) => (
              <div key={userProfile.id}>
                <Link to={`/api/userProfiles/${userProfile.id}`}>
                  <h2>{userProfile.first_name}</h2>
                </Link>
                <p>{userProfile.userDesc}</p>
              </div>
            ))}
          </div>
          </>
        )

      }

    const loading = () => {
        return <h1>Loading... </h1> 
    }

    return (props.userProfiles ? loaded() : loading())
}

export default IndexUserProfile