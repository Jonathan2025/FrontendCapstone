import { Link } from 'react-router-dom'
import InfiniteSlider from '../../components/UserProfilesIndex/InfiniteSlider/InfiniteSlider'
import MediaContainer from '../../components/Media/PostMediaContainer'
import PictureSlider from '../../components/UserProfilesIndex/PictureSlider/PictureSlider'
const IndexUserProfile = (props) => {

    //loaded function
    const loaded = () => {
        return (

          <>
          
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