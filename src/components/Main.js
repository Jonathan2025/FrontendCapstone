import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import IndexPost from '../pages/PostPages/IndexPost'
import ShowPost from '../pages/PostPages/ShowPost'
import EditPost from '../pages/PostPages/EditPost'
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

    // UPDATE POST - request to edit a post 
    const updatePost = async (post, id) => {
        await fetch(URL + id + '/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        });
        //update list of posts
        getPosts();
    }




    useEffect(() => {
        getPosts()
    }, [])

    

    return (
        <main>
            <Routes>
                    <Route path="/api/posts" element={<IndexPost posts={posts} />} />
                    <Route path="/api/posts/:id" element={<ShowPost posts={posts} />} />
                    <Route path="/api/posts/:id/update" element={<EditPost posts={posts} updatePost={updatePost} />} />

            </Routes>
        </main>
    )
}

export default Main