import React, { useContext } from 'react'
import { ShopContexts } from '../ShopContext'
import products from "./products.css"


function EachProduct(props) {

   const{ addtocart,Cartitem } = useContext(ShopContexts)

   const cartitemamount = Cartitem[props.id]

  return (
    <div className='container-product'>
        <img src={props.img[0]} />
        <div className='descr'>
            <p>{props.title}</p>
            <h5>${props.price}</h5>   
            <button onClick={()=> addtocart(props.id)} >Add to Cart {cartitemamount > 0 && <> ({cartitemamount})</>}</button> 
        </div>
    </div>
  )
}

export default EachProduct