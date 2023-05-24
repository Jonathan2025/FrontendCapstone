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
    let loginUser = async() =>{
        let response = fetch(URL, {
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({'username':null, 'password':null})
        })
    }



    // then add this function to context data 
    let contextData={
        loginUser:loginUser
    }



    return (
        // Authentication context is then provided to the component's children
        <AuthContext.Provider value={{'name': 'Jonathan'}}>
            {children}
        </AuthContext.Provider>
    )
}