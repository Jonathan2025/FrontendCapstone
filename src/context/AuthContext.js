import { createContext, useState, useEffect } from "react"
import jwt_decode from "jwt-decode"
import { useNavigate } from "react-router"

// The AuthContext will be used to provide access authentication related data throughout the component
const AuthContext = createContext()

export default AuthContext

// The AuthProvider is a wrapper component that provides authentication context to its child components
export const AuthProvider = ({children}) => {

    // first we want to check in localstorage for the authentication token. If there is then we want to parse the token and set the state
    // if we dont have anything then we set it to null
    // NOW the other thing we did was use a callback function - this is so that the value is set on the initial load and wont call it every time  
    let[authTokens, setAuthTokens] = useState(()=> localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null) 
    let[user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwt_decode(localStorage.getItem('authTokens')) : null) 
    let [loading, setLoading] = useState(true) // state for if the page is loading 
    
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
            alert('Something went wrong with your login')
            console.error('Login failed, its Possible that you dont have an account registered');
        }
    }



    // Now lets build a logout function
    let logoutUser = () => {
        // set the states back to null and then remove from localstorage the authtokens
        setAuthTokens(null)
        setUser(null) 
        localStorage.removeItem('authTokens')
        navigate('api/login')
    }



    // Update Token 
    let updateToken = async () => {
        try {
            console.log('token was updated')
            let response = await fetch(URL + 'refresh/', {
                method:'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                // we need to send the refresh token and th
                body: JSON.stringify({
                    'refresh':authTokens.refresh, 
                })
            })

            // if the response is good then we will update the AuthTokens, setUser and the localstorage
            if(response.ok){
                let data = await response.json()
                setAuthTokens(data)
                setUser(jwt_decode(data.access))
                localStorage.setItem('authTokens', JSON.stringify(data))
            // else if there is a problem we want to see the error and then log the user out
            } else {
                console.error('Error', response.status)
                logoutUser()
            }
        } catch (error){
            console.log("The error is: ", error)
        }
    }



   



    // we want to pass in the authtokens dependencies and the 
    // we want to update the tokens every 2 seconds
    useEffect(()=> {
        let fourMinutes = 1000 * 60 * 4
        let interval = setInterval(()=>{
            if(authTokens){
                // update token needs to be called on the first load OR however many minutes
                updateToken()
            }
        }, fourMinutes)
        // similar in what we did in unit one, we need to clear the interval else it will keep running infinitely
        return ()=> clearInterval(interval)
    }, [authTokens, loading])
    

    


    const contextData = {
        user:user,
        loginUser:loginUser,
        logoutUser:logoutUser,
        authTokens: authTokens,

    }



     // then redirect them to the home page 


    return (
        // Authentication context is then provided to the component's children
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}