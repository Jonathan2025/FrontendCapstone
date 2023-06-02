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

    // handleChange function for form
    const handleChange = (event) => {
        setNewForm({ ...newForm, [event.target.name]: event.target.value })
    }
 
    const handleSubmit = (event) => {
            event.preventDefault();
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
                        />
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
                          />
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