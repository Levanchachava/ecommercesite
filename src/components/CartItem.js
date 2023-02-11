import React, { useContext } from 'react'
import { ShopContexts } from '../ShopContext'
import cartitem from "./cartitem.css"

function CartItem(props) {
    const { id, title, name, price, images } = props.data;
    const { Cartitem, addtocart, removetocart, updateCartItemCount } =
    useContext(ShopContexts);
  return (
    <div className="cartItem">
    <img src={images[0]} />
        <div className="description">
            <p>
              <b>{title}</b>
            </p>
            <p className='price'> Price: ${price}</p>
            <div className='countHandler'>
                <button onClick={()=> removetocart(id)} >-</button>
                <input value={Cartitem[id]} onChange={(e)=> updateCartItemCount(e.target.value, id) } />
                <button onClick={()=> addtocart(id)} >+</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem