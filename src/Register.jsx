import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom';

function Register() {
  return (

    <div className="form-container">
        <form action="">
            <h3>Register Now</h3>

            <input type="text" name='name' required placeholder='enter your name' />
            <input type="email"  name='email'required placeholder='enter your email'/>
            <input type="password" name='password' required placeholder='enter yopur passsword' />
            <input type="password" name='cpassword' required placeholder='confirm your password' />

            <input type="submit" name='submit' className='form-btn'/>
            <p>already have an account?
              <nav>
                <ul>
                  <Link to="/Login" >Login</Link>
                </ul>
              </nav>
            </p>
        </form>
    </div>
  )
}

export default Register


