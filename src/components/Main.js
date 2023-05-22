import React, {useState, useEffect} from 'react'
import IndexPost from '../pages/PostPages/IndexPost'
import {Routes, Route} from 'react-router-dom'

const Main = () => {

    const [posts, setPosts] = useState([])
    const URL = process.env.REACT_APP_POSTS_BACKEND_URL
    
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
        <main>
            <Routes>
                <Route path='/api/posts' element={<IndexPost posts={posts}  />}/>
            </Routes>
        </main>
    )
}

export default Main