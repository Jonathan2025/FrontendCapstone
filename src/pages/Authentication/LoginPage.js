import { useContext } from "react"
import AuthContext from "../../context/AuthContext"

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
        <div className="centerSignIn col s12 m6 l3">
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
        
            <button class="btn red waves-effect waves-light" type="submit" name="action">Sign In </button>
      
          </form>
      </div>
</div>
  )
}

export default LoginPage