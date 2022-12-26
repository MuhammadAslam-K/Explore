import React, { useState, Fragment, useContext } from 'react'
import { FirebaseContext, AuthContext } from '../../store/Context'
import { useHistory } from 'react-router-dom'
import './Creater.css'

function Creater() {
  const history = useHistory()
  const [placename, setPlacename] = useState()
  const [price, setPrice] = useState()
  const [offer, setOffer] = useState()
  const [placetovisit, setPlacetovisit] = useState()
  const [discription, setDiscription] = useState()
  const [image, setImage] = useState(null)
  const { firebase } = useContext(FirebaseContext)
  const { user } = useContext(AuthContext)
  const date = new Date()

  const handlesubmit = (e) => {
    e.preventDefault()
    firebase.storage().ref(`/image/${image.name}`).put(image).then(({ ref }) => {
      ref.getDownloadURL().then((url) => {
        console.log(url)
        firebase.firestore().collection('products').add({
          placename,
          price,
          offer,
          placetovisit,
          discription,
          url,
          userId: user.uid,
          postedAt: date.toDateString()
        })
        history.push('/home')
      })
    })
  }
  return (
    <div>
      <div className='admin-pannel'>
        <form onSubmit={handlesubmit}>
          <label>Place Name</label><br />
          <input
            type='text'
            value={placename}
            onChange={(e) => setPlacename(e.target.value)}
            className='admin-input' /><br />
          <label>price</label><br />
          <input
            type='number'
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            className='admin-input' /><br />
          <label>Offers</label><br />
          <input
            type='number'
            value={offer}
            onChange={(e) => setOffer(e.target.value)}
            className='admin-input' /><br />
          <label>places to visit</label><br />
          <input
            type='text'
            value={placetovisit}
            onChange={(e) => setPlacetovisit(e.target.value)}
            className='admin-input' /><br />
          <label>About</label><br />
          <input
            type='text'
            value={discription}
            onChange={(e) => setDiscription(e.target.value)}
            className='admin-input' /><br />
          <img alt='post' width="200px" height="200px" src={image ? URL.createObjectURL(image) : ''} ></img>
          <br />
          <label>image</label><br />
          <input
            type='file'
            onChange={(e) => {
              setImage(e.target.files[0])
            }}
            className='admin-input' /><br />
          <button className='submit-btn'>submit</button>
        </form>
      </div>
    </div>
  )
}

export default Creater
