import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Header = () => {
  // here we can use the user and logoutuser from AuthContext
  let {user, logoutUser} = useContext(AuthContext)
  

  return (
    <div>
      <Link to='/' >Home</Link>
      {/* if we have a user then we need to have a logout link */}
      {user ? (
        <p onClick={logoutUser}>Logout</p>
      ): (
          <Link to='/api/login' >Login</Link>
      )}


      {user && <p>Hello {user.username}</p>}
    </div>
  )
}

export default Header