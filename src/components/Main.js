import React, {useState, useEffect} from 'react'
import {Routes, Route} from 'react-router-dom'

import IndexPost from '../pages/PostPages/IndexPost'
import ShowPost from '../pages/PostPages/ShowPost'
import EditPost from '../pages/PostPages/EditPost'
import CreatePost from '../pages/PostPages/CreatePost'

import IndexUserProfile from '../pages/UserProfilePages/IndexUser'
import ShowUserProfile from '../pages/UserProfilePages/ShowUser'
import CreateUserProfile from '../pages/UserProfilePages/CreateUser'

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

    // Create POST - request to create a post 
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

     //Making an api call to the POSTs backend URL
     const getUserProfiles = async () =>{
        const response = await fetch(userProfileURL)
        const data = await response.json()
        setUserprofiles(data)
    }


    // Create POST - request to create a user profile 
    const createUserProfile = async (userProfile) => {
        await fetch(userProfileURL + 'create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userProfile),
        })
        //update list of profiles
        getUserProfiles()
    }



    //Update Profiles - request to update a user profile
    const updateUserProfile = async (userProfile, id) => {
        await fetch(userProfileURL + id + '/update', {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userProfile),
        })
        getUserProfiles()
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

                    <Route path="/api/userProfiles" element={<IndexUserProfile userProfiles={userProfiles} />} />
                    <Route path="/api/userProfiles/:id" element={<ShowUserProfile userProfiles={userProfiles} />} />
                    <Route path="/api/userProfiles/create" element={<CreateUserProfile userProfiles={userProfiles} createUserProfile={createUserProfile}/>} />
                    <Route path="/api/userProfiles/:id/update" element={<EditUserProfile userProfiles={userProfiles} updatePost={updatePost} />} />
            </Routes>
        </main>
    )
}

export default Main