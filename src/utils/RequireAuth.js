import {Route, Redirect} from 'react-router-dom'

// Here we created a privateroute component which will allow someone to 
// Children will be the element that is passed --> which are the routes that are passed.
// In simple terms - we are wrapping the component in requireAuth 
const RequireAuth =({ children }:{children: Element}) =>{
  console.log("You reached Require Auth")

  return children 
  }


export default RequireAuth