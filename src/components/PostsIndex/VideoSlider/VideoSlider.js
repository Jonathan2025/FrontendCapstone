import { Link } from "react-router-dom";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PreviewMediaContainer from "./PreviewMediaContainer";

const VideoSlider = (props) => {
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

    const categorySet = new Set() // create a set where we can add all the PRESENT categories of the videos for each post

    props.posts.forEach((post) => {
        const categoryString = post.category // the category is actually a string of values so we need to convert it to an array
        const trimmedString = categoryString.replace(/[\[\]']/g, '') // Remove square brackets and single quotes
        const categoryArray = trimmedString.split(',') // Now split the string by ,. This results in an ibject type, specifically an array 

        //console.log(categoryArray) // ['Basics', 'Tutorial']
        categoryArray.forEach((category) => {
            categorySet.add(category)
        })
    })

    // turn the categorySet to an array 
    const uniqueCategories = Array.from(categorySet)

  return (
    <div> 
        {uniqueCategories.map((category) => (
            <div key={category}>    
                <h4 className="postCategory">{category}</h4>
                <Slider {...settings}>
                    {props.posts
                        .filter((post) => post.category.replace(/[\[\]']/g, '').split(',').includes(category)) // pretty much we take the post.category and clean it to an array. Now if a category is include it will be put under that slider 
                        .map((post, index) => (
                            <div key={index} className="postCard"> 
                                <Link to={`/api/posts/${post.id}`} className="postCard-link">
                                    <div className="postCard-top">
                                        <PreviewMediaContainer className="carousel-item" uploadFile={post.upload}/>
                                    </div>
                                    <div className="postCard-bottom">
                                        <p className="indexPostTitle">{post.title}</p>
                                    </div>
                                </Link>
                            </div>
                        ))
                    }
                </Slider>
            </div>
        ))}
    </div>
  )
}

export default VideoSlider