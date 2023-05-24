import React, {useState, useEffect, useContext} from 'react'
import {Routes, Route} from 'react-router-dom'

import HomePage from '../pages/HomePage'
import LoginPage from '../pages/Authentication/LoginPage'
import RegisterPage from '../pages/Authentication/RegisterPage'
import RequireAuth from '../utilities/RequireAuth'

import AuthContext, { AuthProvider } from '../context/AuthContext' 

import IndexPost from '../pages/PostPages/IndexPost'
import ShowPost from '../pages/PostPages/ShowPost'
import EditPost from '../pages/PostPages/EditPost'
import CreatePost from '../pages/PostPages/CreatePost'

import IndexUserProfile from '../pages/UserProfilePages/IndexUser'
import ShowUserProfile from '../pages/UserProfilePages/ShowUser'
import CreateUserProfile from '../pages/UserProfilePages/CreateUser'
import EditUserProfile from '../pages/UserProfilePages/EditUser'

const Main = (props) => {

    const [posts, setPosts] = useState([])
    let {authTokens} = useContext(AuthContext)
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

    // DELETE user profile - request to delete a user profile
    const deleteUserprofile = async (id) => {
        await fetch(userProfileURL + id + '/delete', {
            method: 'DELETE',
        })
        //update list of posts
        getUserProfiles()
    }



    // Register a User
    const REGISTER_URL = process.env.REACT_APP_REGISTER_URL
     let registerUser = async (registeredUser) => {
        try {
            let response = await fetch(REGISTER_URL, {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(registeredUser)
            })
            // if the response is good then we will get the data
            if(response.ok){
                let data = await response.json()
                console.log("You have been registered!")
            // else if there is a problem we want to see the error
            } else {
                console.error('Error', response.status)
                console.log(response)
            }
        } catch (error){
            console.log("The error is: ", error)
        }
    }







    useEffect(() => {
        getUserProfiles()
    }, [])




    return (
        <main>
            {/* Wrap the components that will use the Authprovider */}
            
                <Routes>
                
                
                    <Route path="/api/home" element={<RequireAuth><HomePage/></RequireAuth>} />
                    <Route path="/api/login" element={<LoginPage/>} />
                    <Route path="/api/register" element={<RegisterPage registerUser={registerUser} />} />
                    
                
                    <Route path="/api/posts" element={<IndexPost posts={posts} />} />
                    <Route path="/api/posts/:id" element={<ShowPost posts={posts} deletePost={deletePost}/>} />
                    <Route path="/api/posts/:id/update" element={<EditPost posts={posts} updatePost={updatePost} />} />
                    <Route path="/api/posts/create" element={<CreatePost posts={posts} createPost={createPost}/>} />

                    <Route path="/api/userProfiles" element={<IndexUserProfile userProfiles={userProfiles} />} />
                    <Route path="/api/userProfiles/:id" element={<ShowUserProfile userProfiles={userProfiles} deleteUserProfile={deleteUserprofile}/>} />
                    <Route path="/api/userProfiles/create" element={<CreateUserProfile userProfiles={userProfiles} createUserProfile={createUserProfile}/>} />
                    <Route path="/api/userProfiles/:id/update" element={<EditUserProfile userProfiles={userProfiles} updateUserProfile={updateUserProfile} />} />
                </Routes>
        
        </main>
    )
}

export default Main