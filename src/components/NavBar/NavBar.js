
import {useContext, useEffect} from 'react'
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import logo from "../../styling/Images/newlogo.png"
import M from 'materialize-css'


const NavBar = () => {
    let {user, logoutUser} = useContext(AuthContext)

    useEffect(() => {
        // Initialize dropdown
        let dropdowns = document.querySelectorAll('.dropdown-trigger');
        M.Dropdown.init(dropdowns)
      }, [])
    


  return (
 

    <>
   <ul id="dropdown1" class="dropdown-content navBarDropdown">
        <li><a href="#!">View Profile</a></li>
        <li><a href="#!">Logout</a></li>
    </ul>


    <nav className="nav-wraper mainNavBar">
            <Link to="/api/home"><img className="logo left" src={logo} alt="Logo"/></Link>
    
            <a href="#" className="sidenav-trigger right hide-on-large-only" data-target="mobile-links">
                <i className="material-icons hide-on">menu</i>
            </a>

            <ul className="right hide-on-med-and-down">
                <li><Link to="/api/home">Home</Link></li>
                <li><Link to="/api/posts">Posts</Link></li>
                <li><Link to="/api/userProfiles">Users</Link></li>
                <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">Account<i class="material-icons right">arrow_drop_down</i></a></li>
            </ul>
   
    </nav>







    
    </>
  )
}

export default NavBar