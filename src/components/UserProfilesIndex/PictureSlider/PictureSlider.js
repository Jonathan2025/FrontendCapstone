import UserMediaContainer from "../../Media/UserMediaContainer";
import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";



const PictureSlider = (props) => {

    // Settings from React-Slick documentation, please refer to citations for more information
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






    //loaded function
    const loaded = () => {
        return (
            // we will be using the Slider from react-slick to create the carousel. Pass in the settings from above
            <Slider {...settings}> 

                    {props.userProfiles.map((userProfile, index) => (
                    <div key={index} className="card">
                        <div className="card-top">
                            <UserMediaContainer className="carousel-item" uploadFile={userProfile.picture} />
                        </div>
                        <div className="card-bottom">
                            <h5 className="indexPageUserFullName">{userProfile.first_name + " " + userProfile.last_name}</h5>
                            <h5>{userProfile.beltLevel}</h5>
                        </div>
                    </div>
                        
                 
                    ))}

            </Slider>


        )

      }

    const loading = () => {
        return <h1>Loading... </h1> 
    }

    return (props.userProfiles ? loaded() : loading())
}

export default PictureSlider

         {/* {props.userProfiles.map((userProfile) => (
              <div key={userProfile.id}>
                <h2>{userProfile.martialArt}</h2>
                <Link to={`/api/userProfiles/${userProfile.id}`}>
                  <MediaContainer uploadFile={userProfile.picture}/>
                </Link>
                
              </div>
            ))} */}



