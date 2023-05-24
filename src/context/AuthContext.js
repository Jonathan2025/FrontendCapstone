import { createContext, useState, useEffect } from "react"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router"

// The AuthContext will be used to provide access authentication related data throughout the component
const AuthContext = createContext()

export default AuthContext

// The AuthProvider is a wrapper component that provides authentication context to its child components
export const AuthProvider = ({children}) => {

    localStorage.getItem('authTokens')
    
    let[authTokens, setAuthTokens] = useState(null)
    let[user, setUser]=useState(null)

    const URL = process.env.REACT_APP_API_TOKEN_URL
    
    const navigate = useNavigate()



    // lets build out a login function
    const loginUser = async(event) =>{
        event.preventDefault()
        let response = await fetch(URL, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            // from the form submitted we will get the username and password
            body:JSON.stringify({
                'username':event.target.username.value, 
                'password':event.target.password.value
            })
        })

        // if the response has an ok status, then we will get back the data. The data will be the access and refresh token
        if (response.ok) {
            let data = await response.json()
            // we then want to set the tokens 
            setAuthTokens(data)
            // then we want to set the user using the DECODED data from the jwt token (like username)
            setUser(jwt_decode(data.access))
            // set the local storage to be the authtokens AND the data stringifyed
            // that way even if we refresh the page, the user can still be logged in 
            localStorage.setItem('authTokens', JSON.stringify(data))
            navigate('api/home')
        } else {
            alert('Something went wrong with you login')
            console.error('Login failed, its Possible that you dont have an account registered');
        }
    }


    const contextData = {
        user:user,
        loginUser:loginUser,
    }



     // then redirect them to the home page 


    return (
        // Authentication context is then provided to the component's children
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}