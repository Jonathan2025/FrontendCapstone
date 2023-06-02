import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'
import logo from '../styling/Images/newlogo.png'

const Header = () => {
  // here we can use the user and logoutuser from AuthContext
  let {user, logoutUser} = useContext(AuthContext)
  return (
    <div className='navBar'>
      <img className="logo" src={logo} alt="Logo"/>
      {!user ? (
        // If we don't have a user, then they need to login or register
        <>
          <Link to="/api/login">
          <button className="navBarSignInBtn btn red waves-effect waves-light">Sign In</button>
        </Link>
        </>
      ) : (
        // If we have a user, show logout link and other links
        <>
          <Link to="/api/login" onClick={logoutUser}>Logout</Link>
          <Link to="/api/posts">Posts</Link>
          <Link to="/api/home">Home</Link>
          <Link to="/api/posts/create">Create</Link>
          <p>Hello {user.username}</p>
        </>
      )}
    </div>
  )
}

export default Header