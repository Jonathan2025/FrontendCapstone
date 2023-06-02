import { useContext } from "react"
import AuthContext from "../../context/AuthContext"
import { Link } from 'react-router-dom'
import "../../styling/CSS/LoginPage.css"

const LoginPage = () => {
  let { loginUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
     {/* When the form is submitted we want to fire off the loginuser function */}
    event.preventDefault()
    loginUser(event)
  }

  return (
    <div class="signInPage row">
      <div className="shadingOverImage"></div> 
        <div className="centerSignIn col s12 m6 l4">
          <form class="signInForm col s12 " onSubmit={handleSubmit}>
            <h3 class="signInHeader">Sign In</h3>

            <div class="row">
              <div class="signInInputDiv input-field col s12">
                <input type="text" name="username" placeholder="Username" />
              </div>
            </div>
        
            <div class="row">
              <div class="signInInputDiv input-field col s12">
                <input type="password" name="password" placeholder="Password" />
              </div>
            </div>

            <div class="row linkContainer">
              <div class="linktoregister">
                <p>New to KickFlix? </p> <Link to="/api/register">Register Now</Link>
              </div>
            </div>
        
            <button class="signInBtn btn red waves-effect waves-light btn-large" type="submit" name="action">Sign In </button>
      
          </form>
      </div>
</div>
  )
}

export default LoginPage