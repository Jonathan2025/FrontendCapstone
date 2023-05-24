import { createContext, useState, useEffect } from "react"

// The AuthContext will be used to provide access authentication related data throughout the component
const AuthContext = createContext()

export default AuthContext

// The AuthProvider is a wrapper component that provides authentication context to its child components
export const AuthProvider = ({children}) => {
    return (
        // Authentication context is then provided to the component's children
        <AuthContext.Provider value={{'name': 'Jonathan'}}>
            {children}
        </AuthContext.Provider>
    )
}