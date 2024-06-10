import React, { useState} from 'react'
import axios from 'axios';
import './Register.css'
import { useNavigate,  Link } from 'react-router-dom';


function Register() {
  const history = useNavigate();

  const[Email,setEmail] = useState("")
  const[Password,setPassword] = useState("")

async function submit(e){
e.preventDefault();

try{
    await axios.post("http://localhost:3003/register", {
      Email, Password
    })
    .then(res =>{
      if(res.data ==="exist"){
        alert("User already exist")
      }
      else if(res.data ==="notexist"){
        history("/Admin")
      }
      else
      {
        alert("Registered Successfully! Please Login!");
      }
      
    }) 
    .catch(e=>{
      alert("Wrong details")
      console.log(e);
    })
  
  }
      catch(e){
        console.log(e);
      }

}

  return (
    <div className="form-container">
        <form action="" onSubmit={Register}>
            <h3>Register Now</h3>
            <div className="data">
              <label style={{color:'black'}} htmlFor="Admin">Admin</label>
              <input type="radio" name="admin" id="" />
            </div>
    
            <div className="data">
              <label style={{color:'black'}}  htmlFor="User">User</label>
              <input type="radio" name="user" id="" disabled />
            </div>

            <input type="email" name='Email' required placeholder='Enter your Email' 
            onChange={(e) => {setEmail(e.target.value)}}/>

            <input type="password" name='Password' required placeholder='Enter you Password' 
            onChange={(e) => {setPassword(e.target.value)}}/>
            

            <button type="submit" onClick={submit}  className='btn'>Register</button>
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


