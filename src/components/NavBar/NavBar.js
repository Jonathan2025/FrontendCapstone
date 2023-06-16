import {useContext, useEffect, useState} from 'react'
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import logo from "../../styling/Images/newlogo.png"
import M from 'materialize-css'
import { MdLogout, MdCreate, MdOutlineAccountBox, MdHome, MdUpload, MdVideoLibrary } from 'react-icons/md'
import {FaUsers} from 'react-icons/fa'

const NavBar = () => {
    let {user, logoutUser} = useContext(AuthContext)
    
    useEffect(() => {
        // Initialize dropdown menu for the account
        let dropdowns = document.querySelectorAll('.dropdown-trigger')
          M.Dropdown.init(dropdowns, {
            coverTrigger: false,
            container: document.querySelector('.nav-wraper'), // Provide an element that will be the bounding container of the dropdown. This will make sure that the dropdown is aligned with the dropdown trigger
            constrainWidth: false,
          })
        }, [])
      
        // Handling of the mobile and regular nav bar links
      const [isActive, setIsActive] = useState(false)

      const handleClick = () => {
        setIsActive(!isActive)
      }


  return (
    <>

    
    <ul id="dropdown1" class="dropdown-content navBarDropdown right-align">
          <li><a href="#!"><MdOutlineAccountBox/>{user.username}</a></li>
          <li>
            <a href="/api/login" onClick={logoutUser}>
            <MdLogout /> Logout
            </a>
          </li>
          <li><Link to="/api/userProfiles/create"><MdCreate /> Create Profile</Link></li>
      </ul>


 
      <nav className="nav-wraper mainNavBar">
              <Link to="/api/home"><img className="logo left" src={logo} alt="Logo"/></Link>
      
            
              <a className={`hamburgerButton right ${isActive ? "active" : ""}`} onClick={handleClick}>
                  <i className="material-icons">menu</i>
              </a>
              
                  {/* Here will be the side nav bar for smaller screens */}
                  <div className={`mobileNavbar-links right ${isActive ? "active" : ""}`}>
                    <ul>
                    <li><a href="#!"><MdOutlineAccountBox/>{user.username}</a></li>
                    <li><Link to="/api/home"> <MdHome /> Home</Link></li>
                    <li><Link to="/api/posts/create"> <MdUpload /> Upload</Link></li>
                    <li><Link to="/api/posts"> <MdVideoLibrary /> Posts</Link></li>
                    <li><Link to="/api/userProfiles"> <FaUsers/> Users</Link></li>
                    <li>
                      <a href="/api/login" onClick={logoutUser}>
                        <MdLogout /> Logout
                      </a>
                    </li>
                    <li><Link to="/api/userProfiles/create"><MdCreate /> Create Profile</Link></li>
                  </ul>
                  </div>
        
              {/* These are the regular nav bar links that will show on regular and large screens */}
              <div className="navbar-links right">
              <ul>
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
              </div>
           
    
      </nav>



      
    </>
  )
}

export default NavBar