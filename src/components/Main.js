import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import IndexPost from '../pages/PostPages/IndexPost'
import ShowPost from '../pages/PostPages/ShowPost'
const Main = (props) => {

    const [posts, setPosts] = useState([])
    const URL = process.env.REACT_APP_POSTS_BACKEND_URL
    
    //Making an api call to the POSTs backend URL
    const getPosts = async () =>{
        const response = await fetch(URL)
        const data = await response.json()
        console.log(data)
        setPosts(data)
      
    }



    useEffect(() => {
        getPosts()
    }, [])

    

    return (
        <main>
            <Routes>
                {/* {posts.length > 0 && (
                    <>
                        <Route path="/api/posts" element={<IndexPost posts={posts} />} />
                        <Route path="/api/posts/:id" element={<ShowPost posts={posts} />} />
                    </>
                )} */}

             
                    <Route path="/api/posts" element={<IndexPost posts={posts} />} />
                    <Route path="/api/posts/:id" element={<ShowPost posts={posts} />} />
          
            </Routes>
        </main>
    )
}

export default Main