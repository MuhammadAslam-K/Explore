import React from 'react'
import image from '../Images/Banner.jpg'
import './Banner.css'
import {useHistory} from 'react-router-dom'

function Banner() {
const history = useHistory()
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
        >login</span>
        <span className='logout-btn'>logout</span>
        </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
