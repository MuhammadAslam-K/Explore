import React from 'react'
import './posts.css'
function Posts() {
    return (
        <div className="postParentDiv">
            <div className="moreView">
                <div className="cards">
                    <div className="card">
                        <div className="image">
          
                            <img src="../../../Images/login.jpg" alt="no img" />
                        </div>
                        <div className="content">
                            <p className="name"> name</p>
                            <span className="price">&#x20B9;price</span>
                            <p className="offer">offer </p>
                        </div>
                        <div className="date">
                            <span>date</span>
                        </div>
                    </div>


                </div>
            </div>
        </div>
    )
}

export default Posts
