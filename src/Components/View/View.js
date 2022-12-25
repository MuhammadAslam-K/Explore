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
        <img
          src={postDetails.url}
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>{postDetails.placename}</p>
          <span>&#x20B9; {postDetails.price} </span>
          <p>{postDetails.facilityprovided}</p>
          <span>{postDetails.placetovisit}</span>
        </div>

  { userDetails && <div className="contactDetails">
          <p>{userDetails.username}</p>
          <p>{userDetails.phone}</p>
          
        </div> }
      </div>
    </div>
  );
}
export default View;
