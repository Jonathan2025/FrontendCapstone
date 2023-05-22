import React, {useState, useEffect} from 'react'

const Main = () => {

    const [posts, setPosts] = useState([])
    const URL = process.env.REACT_APP_POSTS_BACKEND_URL

    console.log(URL)
    

    //Making an api call to the POSTs backend URL
    const getPosts = async () =>{
        const response = await fetch(URL)
        const data = await response.json()
        setPosts(data)
        console.log(posts)
    }



    useEffect(() => {
        getPosts()
    }, [])




    return (
        <div>Main</div>
    )
}

export default Main