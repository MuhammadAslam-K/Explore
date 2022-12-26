import React,{useEffect,useState,useContext} from 'react';
import { FirebaseContext } from '../../store/Context';
import { postContext } from '../../store/postContext';

import './View.css';
function View() {
const [userDetails, setUserDetails] = useState()
const {postDetails} = useContext(postContext)
const {firebase} = useContext(FirebaseContext)
useEffect(()=>{
  const {userId} = postDetails
  firebase.firestore().collection('users').where('id','==',userId,).get().then((res)=>{
    res.forEach(doc => {
      setUserDetails(doc.data())
    });
  })
},[])

  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
      <p className='location'>{postDetails.placename}</p>
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          
          <span>Price:&#x20B9; {postDetails.price} </span>
          <p>Offer:{postDetails.offer}%</p>
          <span>Places to visit:{postDetails.placetovisit}</span>
        </div>
        <div className='aboutsection'>
        <p><h1>About:</h1>{postDetails.discription}</p>
        </div>

  { userDetails && <div className="contactDetails">
    <h1>Agent Details</h1>
          <p>Name:{userDetails.username}</p>
          <p>Phone No:{userDetails.phone}</p>
          
        </div> }
      </div>
    </div>
  );
}
export default View;
