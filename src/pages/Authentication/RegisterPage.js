import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router'

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
        setNewForm({ ...newForm, [event.target.name]: event.target.value });
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
            navigate("/api/login");
          }
    

          return (
            <div>
              <h1>Register Here!</h1>
              <form onSubmit={handleSubmit}>
                <input
                  type="text"
                  name="username"
                  value={newForm.username}
                  placeholder="Username"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password"
                  value={newForm.password}
                  placeholder="Password"
                  onChange={handleChange}
                />
                <input
                  type="password"
                  name="password2"
                  value={newForm.password2}
                  placeholder="Confirm Password"
                  onChange={handleChange}
                />
                <input
                  type="email"
                  name="email"
                  value={newForm.email}
                  placeholder="Email"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="first_name"
                  value={newForm.first_name}
                  placeholder="First Name"
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="last_name"
                  value={newForm.last_name}
                  placeholder="Last Name"
                  onChange={handleChange}
                />
                <input type="submit" value="Register" />
              </form>
            </div>
          );
        }

export default RegisterPage