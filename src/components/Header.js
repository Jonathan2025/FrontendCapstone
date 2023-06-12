import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import NavBarSignedOut from './NavBar/NavBarSignedOut'

const Header = () => {
  
  let {user} = useContext(AuthContext) // here we can use the user and logoutuser from AuthContext
  return (
    <div className='navBar'>
      {!user ? (
        // If we don't have a user they will have the signedout version of the nav bar with limited functionality
        <NavBarSignedOut />
      ) : (
        <NavBar />
      )}
    </div>
  )
}

export default Header