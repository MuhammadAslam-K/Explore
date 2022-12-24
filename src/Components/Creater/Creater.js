import React from 'react'

function Creater() {
  return (
    <div>
      <form>
        <label>Place Name</label><br />
        <input
          type='text'
          className='admin-input' /><br />
        <label>price</label><br />
        <input
          type='number'
          className='admin-input' /><br />
        <label>Offers</label><br />
        <input
          type='number'
          className='admin-input' /><br />
        <label>Facilitys Provided</label><br />
        <input
          type='text'
          className='admin-input' /><br />
        <label>places to visit</label><br />
        <input
          type='text'
          className='admin-input' /><br />
        <label>Phone No</label><br />
        <input
          type='number'
          className='admin-input' /><br />
        <label>image</label><br />
        <input
          type='file'
          className='admin-input' /><br />
      </form>
    </div>
  )
}

export default Creater
