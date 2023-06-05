import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'
import NavBar from './NavBar/NavBar'


const Header = () => {
  // here we can use the user and logoutuser from AuthContext
  let {user, logoutUser} = useContext(AuthContext)
  return (
    <div className='navBar'>
      {/* <img className="logo" src={logo} alt="Logo"/> */}
      {!user ? (
        // If we don't have a user, then they need to login or register
        <>
          <Link to="/api/login">
          <button className="navBarSignInBtn btn red waves-effect waves-light">Sign In</button>
        </Link>
        </>
      ) : (
        <NavBar />
      )}
    </div>
  )
}

export default Header