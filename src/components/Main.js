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
    let {authTokens} = useContext(AuthContext) // we want to get the authTokens so then we can use it in the headers of the request
    let accessToken = authTokens?.access // use optional chaining so that if the authToken expired we can just logback in
    const POST_URL = process.env.REACT_APP_POSTS_BACKEND_URL
    
    //Making an api call to the POSTs backend URL
    const getPosts = async () =>{
        try{
            const response = await fetch(POST_URL, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                },
            })
            const data = await response.json()
            setPosts(data)
            console.log(" did we get the post data?", data)
           
        } catch (error){
            console.log("There was an error getting the post data", error)
        }
       
    }


    const createPost = async (post) => {
        console.log(post);
        // essentially here we need to separate the file and the rest of data when uploading
        const requestData = {
          title: post.title,
          category: post.category,
          postDesc: post.postDesc,
          username: post.username,
        };
      
        const formData = new FormData();
        formData.append('data', JSON.stringify(requestData))
        formData.append('upload', post.upload);
        
        await fetch(POST_URL + 'create', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${accessToken}` // pass in the access token since we need to be authenticated for this route
            },
          body: formData,
        })
          .then((response) => {
            console.log("this is the response we get from creating post", response)
            
            
            return response.json()
          })
          .then((data) => {
            // Update list of posts
            getPosts()
          })
          .catch((error) => {
            console.error('Error:', error)
          })
      }

    const updatePost = async (post, id) => {
        console.log("you have reached updatepost")
        const requestData = {
          title: post.title,
          category: post.category,
          postDesc: post.postDesc,
          username: post.username,
        }
      
        const formData = new FormData()
        formData.append('data', JSON.stringify(requestData))
        formData.append('upload', post.upload)
      
        await fetch(POST_URL + id + '/update', {
          method: 'PUT',
          headers: {
            'Authorization': `Bearer ${accessToken}`,
          },
          body: formData,
        })
          .then((response) => response.json())
          .then((data) => {
            // Update list of posts
            getPosts()
          })
          .catch((error) => {
            console.error('This is the error in update post', error)
          })
      }




    // DELETE POST - request to delete a post 
    const deletePost = async (id) => {
        await fetch(POST_URL + id + '/delete', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`,
              },
        })
        //update list of posts
        getPosts()
    }

    useEffect(() => {
        getPosts()
    }, [])

    
    


    const [userProfiles, setUserprofiles] = useState([])
    const userProfileURL = process.env.REACT_APP_USERPROFILES_BACKEND_URL

    //  Making an api call to the POSTs backend URL
     const getUserProfiles = async () =>{
        const response = await fetch(userProfileURL)
        const data = await response.json()
        setUserprofiles(data)
    }



    // API call to create a user profile
    const createUserProfile = async (userProfile) =>{
        try{
            const requestData = {
                username: userProfile.username,
                first_name: userProfile.first_name,
                last_name: userProfile.last_name,
                beltLevel: userProfile.beltLevel,
                userDesc: userProfile.userDesc,
                martialArt: userProfile.martialArt,
                address: userProfile.address,
                city: userProfile.city,
                state: userProfile.state,
                zip_code: userProfile.zip_code
            }

            const formData = new FormData();
            formData.append('data', JSON.stringify(requestData))
            formData.append('picture', userProfile.picture);

            const response = await fetch(userProfileURL + 'create', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                body: formData,
            })
            .then((response) => response.json())
            .then((data) => {
                // Update list of userProfiles
                getUserProfiles()
            })
        } catch (error){
            console.log("There was an error creating the user profile", error)
        }
    }




    //Update Profiles - request to update a user profile
    const updateUserProfile = async (userProfile, id) => {
       try{
            const requestData = {
                username: userProfile.username,
                first_name: userProfile.first_name,
                last_name: userProfile.last_name,
                beltLevel: userProfile.beltLevel,
                userDesc: userProfile.userDesc,
                martialArt: userProfile.martialArt,
                address: userProfile.address,
                city: userProfile.city,
                state: userProfile.state,
                zip_code: userProfile.zip_code
            }
            const formData = new FormData();
            formData.append('data', JSON.stringify(requestData))
            formData.append('picture', userProfile.picture)

            const response = await fetch(userProfileURL + id + '/update', {
                method: 'PUT',
                headers: {
                    'Authorization': `Bearer ${accessToken}`
                },
                body: formData,
            })
            .then((response) => response.json())
            .then((data) => {
                // Update list of userProfiles
                getUserProfiles()
            })
            
        } catch (error){
            console.log("There was an error creating the user profile", error)
        }
    }


    // DELETE user profile - request to delete a user profile
    const deleteUserprofile = async (id) => {
        console.log("this is the delete user")
        await fetch(userProfileURL + id + '/delete', {
            method: 'DELETE',
            headers: {
                'Authorization': `Bearer ${accessToken}`
            },
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
                alert("You have been registered! You can now login")
            // else - from our testing, the error will most likely be that the username or email is taken 
            } else {
                console.error('Error', response.status)
                alert("The attempted username or email is already taken. Please re-register with a different one")
            }
        } catch (error){
            console.log("The error is: ", error)
            alert("Error:", error)
        }
    }

    useEffect(() => {
        getUserProfiles()
    }, [])




    return (
        <main>
            {/* Wrap the components that will use the Authprovider */}
            
                <Routes>
                
                
                    <Route path="/api/home" element={<HomePage/>} />
                    <Route path="/api/login" element={<LoginPage/>} />
                    <Route path="/api/register" element={<RegisterPage registerUser={registerUser} />} />
                    
                
                    <Route path="/api/posts" element={<IndexPost posts={posts} />} />
                    <Route path="/api/posts/:id" element={<RequireAuth><ShowPost posts={posts} deletePost={deletePost}/></RequireAuth>} />
                    <Route path="/api/posts/:id/update" element={<RequireAuth><EditPost posts={posts} updatePost={updatePost} /></RequireAuth>} />
                    <Route path="/api/posts/create" element={<RequireAuth><CreatePost posts={posts} createPost={createPost}/></RequireAuth>} />

                    <Route path="/api/userProfiles" element={<IndexUserProfile userProfiles={userProfiles} />} />
                    <Route path="/api/userProfiles/:id" element={<RequireAuth><ShowUserProfile userProfiles={userProfiles} deleteUserProfile={deleteUserprofile}/></RequireAuth>} />
                    <Route path="/api/userProfiles/create" element={<RequireAuth><CreateUserProfile userProfiles={userProfiles} createUserProfile={createUserProfile}/></RequireAuth>} />
                    <Route path="/api/userProfiles/:id/update" element={<RequireAuth><EditUserProfile userProfiles={userProfiles} updateUserProfile={updateUserProfile} /></RequireAuth>} />
                </Routes>
        
        </main>
    )
}

export default Main