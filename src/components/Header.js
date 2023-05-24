import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'

const Header = () => {
  // here we can use the name from AuthContext
  const authData = useContext(AuthContext)
  console.log("this is auth data", authData.name)

  return (
    <div>
      <p>HELLO THERE {authData.name}</p>
    </div>
  )
}

export default Header