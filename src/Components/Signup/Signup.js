import React,{useState} from 'react'
import './Signup.css'
import image from '../Images/signup.jpg'
import {useHistory} from 'react-router-dom'



function Signup() {
    const history = useHistory()
const [username, setUsername] = useState()
const [phone, setPhone] = useState()
const [email, setEmail] = useState()
const [password, setPassword] = useState()

  return (
    <div className='signup-img'
     style={{backgroundImage:`url(${image})`}}>
        <div className='signup-box'>
      <form>
        <div>
            <h1>“Life is short, and the<br/> world is wide”</h1>
        </div>
        <lable>UserName</lable><br/>
        <input 
        type='text'
        value={username}
        onChange={(e)=>setUsername(e.target.value)}
        className='input'
        />
        <br/>
        <lable>Phone No</lable><br/>
        <input 
        type='number'
        value={phone}
        onChange={(e)=>setPhone(e.target.value)}
        className='input'
        />
        <br/>
        <lable>Email Id</lable><br/>
        <input 
        type='email'
        value={email}
        onChange={(e)=>setEmail(e.target.value)}
        className='input'
        />
        <br/>
        <lable>Password</lable><br/>
        <input 
        type='password'
        value={password}
        onChange={(e)=>setPassword(e.target.value)}
        className='input'
        />
        <br/>
        <button className='signup-btn'
        onClick={()=>{
            history.push('/login')
        }}
        >signUp</button>
      </form>
      </div>
    </div>
  )
}

export default Signup
