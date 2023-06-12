import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'
import NavBar from './NavBar/NavBar'
import NavBarSignedOut from './NavBar/NavBarSignedOut'

const Header = () => {
  // here we can use the user and logoutuser from AuthContext
  let {user, logoutUser} = useContext(AuthContext)
  return (
    <div className='navBar'>
      {!user ? (
        // If we don't have a user, then they need to login or register
        <NavBarSignedOut />
      ) : (
        <NavBar />
      )}
    </div>
  )
}

export default Header