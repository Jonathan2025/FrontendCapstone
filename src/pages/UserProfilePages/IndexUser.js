import InfiniteSlider from '../../components/UserProfilesIndex/InfiniteSlider/InfiniteSlider'
import PictureSlider from '../../components/UserProfilesIndex/PictureSlider/PictureSlider'
const IndexUserProfile = (props) => {

    //loaded function
    const loaded = () => {
        return (
          <>
          <h3 className ="indexUserPageHeader">Meet Our Users</h3>
          <InfiniteSlider />
          <PictureSlider userProfiles={props.userProfiles} />

    
          </>
        )

      }

    const loading = () => {
        return <h1>Loading... </h1> 
    }

    return (props.userProfiles ? loaded() : loading())
}

export default IndexUserProfile