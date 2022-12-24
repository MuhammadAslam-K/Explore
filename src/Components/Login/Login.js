import React,{useState} from 'react'
import './Login.css'
import image from '../Images/login.jpg'
import {useHistory} from 'react-router-dom'

function Login() {
  const history = useHistory()
  const [email, setEmail] = useState()
  const [password, setPassword] = useState()
  return (
    <div className='login-img'
    style={{backgroundImage:`url(${image})`}}>
    <div className='login-box'>
        <div>
        <h1>“The journey of<br />a thousand miles<br />begins  with a single<br />step.”</h1>
        </div>
      <form>
        <label>Email id</label><br />
        <input 
        type='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='field'
        />
        <br/>
        <label>Password</label><br />
        <input 
        type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='field'
        />
        <br/>
        <div className='loginbtn-parentdiv'>
        <button className='login'
        onClick={()=>{
          history.push('/home')
        }}
        >login</button>
        </div>
        <p className='create'>create an account <a className='login-signup'
        onClick={()=>{
          history.push('/signup')
        }}
        >SignUp</a> ?</p>
      </form>
    </div>
    </div>
  )
}

export default Login
