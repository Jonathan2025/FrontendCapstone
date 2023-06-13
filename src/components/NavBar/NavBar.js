import {useContext, useEffect} from 'react'
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import logo from "../../styling/Images/newlogo.png"
import M from 'materialize-css'
import { MdLogout, MdCreate, MdOutlineAccountBox } from 'react-icons/md'

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
      
      useEffect(() => {
        const toggleHamburger = document.getElementsByClassName('hamburgerButton')[0]
        const navBarLinks = document.getElementsByClassName('navbar-links')[0]
        
        //Handle click function that will toggle the navbarlinks to active 
        const handleClick = () => {
          navBarLinks.classList.toggle('active')
        }
    
        toggleHamburger.addEventListener('click', handleClick) // When the toggle hamburger btn is clicked, handle click fucntion will be executed
        
        // Now remove the event listener. this is not directly responsible for closing the nav bar but its generally good practice to 
        // have a clean up function to clear the event listeners
        return () => {
          toggleHamburger.removeEventListener('click', handleClick)
        }
      }, [])

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
      
              <a className="hamburgerButton right" href="#!"  data-target="slide-out">
                  <i className="material-icons">menu</i>
              </a>

              <div className='navbar-links right'>
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



          {/* Here will be the side nav bar for smaller screens */}
          {/* <ul className="sidenav right-align" id="slide-out" >
            <li><a href="#!"><MdOutlineAccountBox/>{user.username}</a></li>
            <li><Link to="/api/home">Home</Link></li>
            <li><Link to="/api/posts/create">Upload</Link></li>
            <li><Link to="/api/posts">Posts</Link></li>
            <li><Link to="/api/userProfiles">Users</Link></li>
            <li>
              <a href="/api/login" onClick={logoutUser}>
                <MdLogout /> Logout
              </a>
            </li>
            <li><Link to="/api/userProfiles/create"><MdCreate /> Create Profile</Link></li>
          </ul> */}
    </>
  )
}

export default NavBar