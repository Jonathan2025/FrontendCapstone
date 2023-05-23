import {Route, useNavigate, useLocation} from 'react-router-dom'

// Here we created a privateroute component which will allow someone to 
// Children will be the element that is passed --> which are the routes that are passed.
// In simple terms - we are wrapping the component in requireAuth 
const RequireAuth =({ children }:{children: Element}) =>{
  const navigate = useNavigate()
  const location = useLocation()
  const authenticated = false // for now we jsut set authenticated to false 

  // if the user isnt authenticated then return them to the login page
  if (!authenticated) {
    navigate('/api/login')
    return null
  }
  // otherwise return the component
  return children
}



export default RequireAuth