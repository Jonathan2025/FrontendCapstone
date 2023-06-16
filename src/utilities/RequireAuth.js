import {Route, useNavigate, useLocation} from 'react-router-dom'
import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { useEffect } from 'react'

// For the routes that need authentication we will 
// const RequireAuth =({ children  }) =>{
//   const navigate = useNavigate()
//   const location = useLocation()
//   let {user} = useContext(AuthContext)


//   console.log("this is the children in require auth", children)



//   // if the user is not logged in then bring them back to the login page 
//   useEffect(() => {
//     if (!user) {
//       navigate('/api/login');
//     }
//   }, []);

//   if (!user) {
//     return null;
//   }

//   return children
// }



// export default RequireAuth


const RequireAuth =({ children, ...rest  }) =>{
  const navigate = useNavigate()
  const location = useLocation()
  let {user} = useContext(AuthContext)


  console.log("this is the children in require auth", children)



  // if the user is not logged in then bring them back to the login page 
  useEffect(() => {
    if (!user) {
      navigate('/api/login');
    }
  }, []);

  if (!user) {
    return null;
  }

  return children
}



export default RequireAuth