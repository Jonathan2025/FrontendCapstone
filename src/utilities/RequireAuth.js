import {Route, useNavigate, useLocation} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'


// Here we created a privateroute component which will allow someone to 
// Children will be the element that is passed --> which are the routes that are passed.
// In simple terms - we are wrapping the component in requireAuth 
const RequireAuth =({ children }:{children: Element}) =>{
  const navigate = useNavigate()
  const location = useLocation()
  let {user} = useContext(AuthContext)

  // if there is no user then bring them back to the login page 
  if (!user) {
    navigate('/api/login')
    return null
  }
  // otherwise return the component
  return children
}



export default RequireAuth