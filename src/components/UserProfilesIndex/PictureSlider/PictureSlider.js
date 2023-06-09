import UserMediaContainer from "../../Media/UserMediaContainer";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PictureSlider = (props) => {

    // Settings for the slider from React-Slick documentation, please refer to citations for more information
    // Settings refer to how many items should show in various screen sizes
    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 4,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 3,
              slidesToScroll: 3,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 600,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              initialSlide: 2
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
    }


    const loaded = () => {

        // Now we pretty much want to create a separate slider for each martial art (from userProfiles)
        const martialArtsSet = new Set() // first we create a set and add the martial arts from all present userProfiles
        props.userProfiles.forEach((userProfile) => {
            martialArtsSet.add(userProfile.martialArt)
        })

        const martialArts = Array.from(martialArtsSet) // convert the set to an array so its easier to work with 

        return (

            <>  
                {/* From the list of PRESENT martial arts from the user profiles above, we want to create a slider for each of them */}
                {martialArts.map((martialArt) => (
                  <div>
                    <h4 className="martialArtCategory">{martialArt}</h4>
                    <Slider {...settings} key={martialArt}>
                    
                    {props.userProfiles
                        .filter((userProfile) => userProfile.martialArt === martialArt)
                        .map((userProfile, index) => (
                        <div key={index} className="userCard">
                            <Link to={`/api/userProfiles/${userProfile.id}`} className="userCard-link">
                            <div className="userCard-top">
                                <UserMediaContainer className="carousel-item" uploadFile={userProfile.picture} />
                            </div>
                            <div className="userCard-bottom">
                                <h5 className="indexPageUserFullName">{userProfile.first_name + " " + userProfile.last_name}</h5>
                                <h5>{userProfile.beltLevel}</h5>
                            </div>
                            </Link>
                        </div>
                        ))}
                    </Slider>
                    </div>
                ))}
                </>

        )

      }






    const loading = () => {
        return <h1>Loading... </h1> 
    }

    return (props.userProfiles ? loaded() : loading())
}

export default PictureSlider








