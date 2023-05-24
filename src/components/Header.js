import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Header = () => {
  // here we can use the user and logoutuser from AuthContext
  let {user, logoutUser} = useContext(AuthContext)
  

  return (
    <div>
      {!user ? (
        // If we don't have a user, then they need to login or register
        <>
          <Link to="/api/register">Register</Link>
          <Link to="/api/login">Login</Link>
        </>
      ) : (
        // If we have a user, show logout link and other links
        <>
          <p onClick={logoutUser}>Logout</p>
          <Link to="/api/posts">Posts</Link>
          <Link to="/">Home</Link>
          <p>Hello {user.username}</p>
        </>
      )}
    </div>
  )
}

export default Header