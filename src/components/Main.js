import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import IndexPost from '../pages/PostPages/IndexPost'
import ShowPost from '../pages/PostPages/ShowPost'
import EditPost from '../pages/PostPages/EditPost'
import CreatePost from '../pages/PostPages/CreatePost'

import IndexUser from '../pages/UserProfilePages/IndexUser'

const Main = (props) => {

    const [posts, setPosts] = useState([])
    const POST_URL = process.env.REACT_APP_POSTS_BACKEND_URL
    
    //Making an api call to the POSTs backend URL
    const getPosts = async () =>{
        const response = await fetch(POST_URL)
        const data = await response.json()
        console.log(data)
        setPosts(data)
    }

    // UPDATE POST - request to edit a post 
    const createPost = async (post) => {
        await fetch(POST_URL + 'create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        })
        //update list of posts
        getPosts()
    }

    // UPDATE POST - request to edit a post 
    const updatePost = async (post, id) => {
        await fetch(POST_URL + id + '/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(post),
        })
        //update list of posts
        getPosts()
    }

    // DELETE POST - request to delete a post 
    const deletePost = async (id) => {
        await fetch(POST_URL + id + '/delete', {
            method: 'DELETE',
        })
        //update list of posts
        getPosts()
    }

    useEffect(() => {
        getPosts()
    }, [])

    
    


    const [userProfiles, setUserprofiles] = useState([])
    const userProfileURL = process.env.REACT_APP_USERPROFILES_BACKEND_URL

    console.log(userProfileURL)
     //Making an api call to the POSTs backend URL
     const getUserProfiles = async () =>{
        const response = await fetch(userProfileURL)
        const data = await response.json()
        console.log("These are the userprofiles", data)
        setUserprofiles(data)
    }

    useEffect(() => {
        getUserProfiles()
    }, [])




    return (
        <main>
            <Routes>
                    <Route path="/api/posts" element={<IndexPost posts={posts} />} />
                    <Route path="/api/posts/:id" element={<ShowPost posts={posts} deletePost={deletePost}/>} />
                    <Route path="/api/posts/:id/update" element={<EditPost posts={posts} updatePost={updatePost} />} />
                    <Route path="/api/posts/create" element={<CreatePost posts={posts} createPost={createPost}/>} />

                    <Route path="/api/userProfiles" element={<IndexUser userProfiles={userProfiles} />} />

            </Routes>
        </main>
    )
}

export default Main