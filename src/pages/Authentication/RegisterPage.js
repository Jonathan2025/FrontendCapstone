import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'
import "../../styling/CSS/RegisterPage.css"
const RegisterPage = (props) => {
    const navigate = useNavigate()
    const [newForm, setNewForm] = useState({
      username: '',
      password: '',
      password2: '',
      email: '',
      first_name: '',
      last_name: ''
    })

    //Password regex make sure that the password is strong enough to have 1 special character, at least 1 uppercase, etc
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/

    // handleChange function for form
    const handleChange = (event) => {
      setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }
 
    const handleSubmit = (event) => {
      event.preventDefault()
      props.registerUser(newForm)
      setNewForm({
        username: '',
        password: '',
        password2: '',
        email: '',
        first_name: '',
        last_name: ''
      })
      navigate("/api/login")
    }

    
    
    return (
      
            <div className="registerPage row">
              <div className="col s12 m6 l6 center-align">
                <div className="registerText left-align">
                  <h2>Unlimited tutorials, clips, greatness and more</h2>
                  <h4>Watch Anywhere. Upload Anytime.</h4>
                  <h5>Ready to get started?</h5>
                </div>
              </div>


              <div className="col s12 m6 l6">
                <div className="shadingOverImage"></div>
                
                  <form className="registerForm" onSubmit={handleSubmit}>
                  <h3 className='registerHeader'>Create an Account</h3>
                    
                    <div class="row">
                      <div class="registerInputDiv input-field col s12">
                      <input
                          type="text"
                          name="username"
                          value={newForm.username}
                          placeholder="Username"
                          onChange={handleChange}
                        />
                      </div> 
                    </div>

                    <div class="row">
                      <div class="registerInputDiv input-field col s12">
                        <input
                          type="password"
                          name="password"
                          value={newForm.password}
                          placeholder="Password"
                          onChange={handleChange}
                          // if the password entered is not strong enough, then use the invalid class otherewise its valid
                          className={`${newForm.password && !passwordRegex.test(newForm.password) ? 'invalid' : 'valid'}`}
                        />
                        {/* Condition that will display the error message if the password is not strong enough*/}
                          <span className="helper-text">
                            {newForm.password && !passwordRegex.test(newForm.password) && 'Password needs to have at least 1 Uppercase, 1 lowercase, 1 special and be at least 8 characters in length '}
                          </span>
                      </div> 
                    </div>

                    <div class="row">
                      <div class="registerInputDiv input-field col s12">
                          <input
                            type="password"
                            name="password2"
                            value={newForm.password2}
                            placeholder="Confirm Password"
                            onChange={handleChange}
                            // if the pw2 is entered but does not match pw1 then an invalid class will be initiated, otherwise it is valid
                            className={`${newForm.password2 && newForm.password === newForm.password2 ? 'valid' : 'invalid'}`}
                          />
                          <span className="helper-text">
                            {/* Condition that will display the error message if the passwords dont match */}
                            {newForm.password2 && newForm.password !== newForm.password2 && 'Passwords do not match'}
                          </span>

                      </div> 
                    </div>

                    <div class="row">
                      <div class="registerInputDiv input-field col s12">
                          <input
                            type="email"
                            name="email"
                            value={newForm.email}
                            placeholder="Email"
                            onChange={handleChange}
                          //  the email field in materialize will have its own validator
                          />
                          
                      </div> 
                    </div>

                    <div class="row">
                      <div class="registerInputDiv input-field col s12">
                           <input
                            type="text"
                            name="first_name"
                            value={newForm.first_name}
                            placeholder="First Name"
                            onChange={handleChange}
                          />
                      </div> 
                    </div>

                    <div class="row">
                      <div class="registerInputDiv input-field col s12">
                            <input
                              type="text"
                              name="last_name"
                              value={newForm.last_name}
                              placeholder="Last Name"
                              onChange={handleChange}
                            />
                      </div> 
                    </div>

                    <button class="registerBtn btn red waves-effect waves-light btn-large" type="submit" name="action">Register </button>
                  </form>

                </div>
              </div>
      

            
            
          )
        }

export default RegisterPage