import React,{ useState} from 'react'
import axios from 'axios';
import './Register.css'
import { useNavigate, Link } from 'react-router-dom';


function Login() {

  const history = useNavigate();

const[Email ,setEmail] = useState("")
const[Password,setPassword] = useState("")

async function submit(e){
  e.preventDefault();

  try{
    await axios.post("http://localhost:3003/login", {
      Email, Password
    })
    .then(res =>{
      if(res.data ==="exist"){
        history("/Admin")
      }
      else if(res.data==="notexist"){
        alert("User have not sign up")
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
    <div className='form-container'>
        <form action="POST">
            <h3>Login Now</h3>
            <input type="email" name='Email' required placeholder='Enter your Email' 
            onChange={(e) => {setEmail(e.target.value)}}/>

            <input type="password" name='Password' required placeholder='Enter you Password' 
            onChange={(e) => {setPassword(e.target.value)}}/>

            <button type="submit" name='Login' className='btn' placeholder='Login' onClick={submit} >Login</button>
 
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

