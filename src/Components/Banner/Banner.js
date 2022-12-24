import React,{useContext} from 'react'
import image from '../Images/Banner.jpg'
import './Banner.css'
import {useHistory} from 'react-router-dom'
import {FirebaseContext,AuthContext} from '../../store/Context'

function Banner() {
const history = useHistory()
const {firebase} = useContext(FirebaseContext)
const {user} = useContext(AuthContext)
  return (
    <div className='banner-img'
    style={{backgroundImage:`url(${image})`,
    backgroundRepeat:"no-repeat"}}>

      <div className='parentboxdiv'>
        <div className='parentdiv'>
            <p className='title'>Explore With US</p>
        <p className='banner-quate'> “The world is a book and those who do <br />not travel read only one page.”</p>
       <div className='parent-login-btn'>
        <span className='login-btn'
        onClick={()=>{
            history.push('/login')
        }}
        >{user ? `welcome ${user.displayName}`:'login'}</span>
      { user && <span className='logout-btn'
      onClick={()=>{
        firebase.auth().signOut();
        history.push('/')
      }}>logout</span>}
        </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
