import { createContext, useState, useEffect } from "react"

// The AuthContext will be used to provide access authentication related data throughout the component
const AuthContext = createContext()

export default AuthContext

// The AuthProvider is a wrapper component that provides authentication context to its child components
export const AuthProvider = ({children}) => {

    
    let[authTokens, setAuthTokens] = useState(null)
    let[user, setUser]=useState(null)

    const URL = process.env.REACT_APP_API_TOKEN_URL
    
    

    // lets build out a login function
    let loginUser = async(event) =>{
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

        // if the response has an ok status 
        if (response.ok) {
            let data = await response.json();
            console.log('data', data);
        } else {
            console.log(response)
            console.error('Login failed, its Possible that you dont have an account registered');
        }
    }



    // then add this function to context data 
    // let contextData={
    //     loginUser:loginUser
    // }



    return (
        // Authentication context is then provided to the component's children
        <AuthContext.Provider value={{loginUser}}>
            {children}
        </AuthContext.Provider>
    )
}