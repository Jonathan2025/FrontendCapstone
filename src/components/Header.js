import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'
import { Link } from 'react-router-dom'

const Header = () => {
  // here we can use the name from AuthContext
  let {user} = useContext(AuthContext)
  

  return (
    <div>
      <Link to='/' >Home</Link>
      {/* if we have a user then we need to have a logout link */}
      {user ? (
        <p>Logout</p>
      ): (
          <Link to='/api/login' >Login</Link>
      )}


      {user && <p>Hello {user.username}</p>}
    </div>
  )
}

export default Header