import { Link } from 'react-router-dom'

const IndexUser = (props) => {

    //loaded function
    const loaded = () => {
        return (
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
        )
      }

    const loading = () => {
        return <h1>Loading... </h1> 
    }

    return (props.userProfiles ? loaded() : loading())
}

export default IndexUser