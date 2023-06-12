
import {useContext, useEffect} from 'react'
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import logo from "../../styling/Images/newlogo.png"
import M from 'materialize-css'
import { MdLogout, MdCreate, MdOutlineAccountBox } from 'react-icons/md'

const NavBar = () => {
    let {user, logoutUser} = useContext(AuthContext)
    console.log(user.username)
    useEffect(() => {
        // Initialize dropdown
        let dropdowns = document.querySelectorAll('.dropdown-trigger');
          M.Dropdown.init(dropdowns, {
            coverTrigger: false,
            container: document.querySelector('.nav-wraper'), // Provide an element that will be the bounding container of the dropdown. This will make sure that the dropdown is aligned with the dropdown trigger
            constrainWidth: false,
          });
        }, []);
    
  return (
    <>
    <ul id="dropdown1" class="dropdown-content navBarDropdown right-align">
          <li><a href="#!"><MdOutlineAccountBox/>{user.username}</a></li>
          <li>
            <a href="/api/login" onClick={logoutUser}>
            <MdLogout /> Logout
            </a>
          </li>
          <li><Link to="/api/userProfiles/create"><MdCreate /> Create a Profile</Link></li>
        
      </ul>

   


      <nav className="nav-wraper mainNavBar">
              <Link to="/api/home"><img className="logo left" src={logo} alt="Logo"/></Link>
      
              <a href="#" className="sidenav-trigger right hide-on-large-only" data-target="mobile-links">
                  <i className="material-icons hide-on">menu</i>
              </a>

              <ul className="right hide-on-med-and-down">
                  <li><Link to="/api/home">Home</Link></li>
                  <li><Link to="/api/posts/create">Upload</Link></li>
                  <li><Link to="/api/posts">Posts</Link></li>
                  <li><Link to="/api/userProfiles">Users</Link></li>
                  
                  <li><a class="dropdown-trigger" href="#!" data-target="dropdown1">
                    <img
                    src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
                    alt="user profile" 
                    className="commentUserImg"
                    style={{ width: '2.5rem', height: 'auto' }}
                  /><i class="material-icons right">arrow_drop_down</i></a></li>
              </ul>
    
      </nav>
    </>
  )
}

export default NavBar