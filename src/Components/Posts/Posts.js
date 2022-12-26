import React, { useEffect, useState, useContext } from 'react'
import { FirebaseContext } from '../../store/Context'
import { postContext } from '../../store/postContext'
import {useHistory} from 'react-router-dom'

import './posts.css'
function Posts() {
    const { firebase } = useContext(FirebaseContext)
    const [products, setProducts] = useState([])
    const {setPostDetails} = useContext(postContext)
const history = useHistory()

    useEffect(() => {
        firebase.firestore().collection('products').get().then((snapshot) => {
            const allpost = snapshot.docs.map((product) => {
                return {
                    ...product.data(),
                    id: product.id
                }
            })
            setProducts(allpost)
        })

    }, [])

    return (
        <div className="postParentDiv">
            <h1 className='text'>Top Places</h1>
            <div className="moreView">
                <div className="cards">
                    {products.map(product => {

                        return <div className="card"
                        >
                            <div className="image">
                                <img src={product.url} alt="no img" />
                            </div>
                            <div className="content">
                                <p className="name">{product.placename}</p>
                                <span className="price">&#x20B9;{product.price}</span>
                                <p className="offer">{product.offer}%</p>
                            </div>
                            <div className="date">
                                <span onClick={()=>{
                            setPostDetails(product)
                            history.push('/view')
                        }}>Details</span>
                            </div>
                        </div>
                    })
                    }

                </div>
            </div>
        </div>
    )
}

export default Posts
