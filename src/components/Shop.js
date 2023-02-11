import React from 'react'
import { useEffect, useState, useContext } from 'react'
import { ShopContexts } from '../ShopContext'
import CartItem from './CartItem';
import cartitem from "./cartitem.css"
import { useNavigate } from "react-router-dom";


function Shop() {

    const { Cartitem, getTotalCartAmount} = useContext(ShopContexts);

    const[product, setProduct] = useState([])

    const totalAmount = getTotalCartAmount()

    const navigate = useNavigate();

    useEffect(() =>{
      fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data=> setProduct(data.products));
    }, [])

  return (
    <div className='Cart'>
        {product.map((product) => {
          if (Cartitem[product.id] !== 0) {
            return <CartItem data={product} />;
          }
        })}

        {totalAmount===0 ? (
          <div className='cart-empty'>
            <h1 className='emp'>Your cart is empty</h1>
            <button className='navgbtn' onClick={()=> navigate('/') } >go Shopping</button>
          </div>)  :<p className='subtotal'> Subtotal: {totalAmount} </p>}

        
      
    </div>
  )
}

export default Shop