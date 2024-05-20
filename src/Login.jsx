import React from 'react'
import './Register.css'
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className='form-container'>
        <form action="">
            <h3>Login Now</h3>
            <input type="email" name='email' required placeholder='Enter your Email' />
            <input type="password" name='password' required placeholder='Enter you Password' />
            <input type="submit" name='Login' className='form-btn'placeholder='Login' />
            <p>Don't have an account?
              <nav>
                <ul>
                  <Link to="/Register" >Register now</Link>
                </ul>
              </nav>
            </p>
        </form>
      
    </div>
  )
}

export default Login

