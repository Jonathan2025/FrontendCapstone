
import {useContext, useEffect} from 'react'
import AuthContext from '../../context/AuthContext'
import { Link } from 'react-router-dom'
import logo from "../../styling/Images/newlogo.png"

import { useNavigate } from 'react-router-dom'

const NavBarSignedOut = () => {
    let {user, logoutUser} = useContext(AuthContext)
    
    return (
        <>
        <nav className="nav-wraper mainNavBar">
                <Link to="/api/home"><img className="logo left" src={logo} alt="Logo"/></Link>
                <ul className="right hide-on-med-and-down">
                    <li><Link to="/api/home">Home</Link></li>
                    <li><Link to="/api/posts">Posts</Link></li>
                    <li>
                        <Link to="/api/login">
                            <button className="navBarSignInBtn btn red waves-effect waves-light">Sign In</button>
                        </Link>
                    </li>
                
                </ul>
    
        </nav>
        </>
    )
}

export default NavBarSignedOut