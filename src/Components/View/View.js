import React from 'react';

import './View.css';
function View() {
  return (
    <div className="viewParentDiv">
      <div className="imageShowDiv">
        <img
          src="../../../Images/login.jpg"
          alt=""
        />
      </div>
      <div className="rightSection">
        <div className="productDetails">
          <p>place name</p>
          <span>&#x20B9; price </span>
          <p>Two Wheeler</p>
          <span>Tue May 04 2021</span>
        </div>
        <div className="contactDetails">
          <p>Seller details</p>
          <p>No name</p>
          <p>1234567890</p>
        </div>
      </div>
    </div>
  );
}
export default View;
