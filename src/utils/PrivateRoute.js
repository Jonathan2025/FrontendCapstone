import {Route, redirect} from 'react-router-dom'

// Here we created a privateroute component which will allow someone to 
// Children will be the components passed, which wil be the routes and then the "rest" means getting tje rest of the parameters about the route
const PrivateRoute = ({children, ...rest}) => {
    console.log('Private Route works')
    return (
        <Route {...rest}>{children}</Route>
    )
}

export default PrivateRoute