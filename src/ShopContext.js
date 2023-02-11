import React, { createContext, useState, useEffect } from 'react'

export const ShopContexts = createContext(null)

function ShopContextProvider(props) {
    const[CartProduct, setCartproduct] = useState([])
    useEffect(() =>{
        // const options = {
        //     method: 'GET',
        //     headers: {
        //         'X-RapidAPI-Key': '49b8e74506msh1abb6f2e7928472p17a280jsn5f2d21541da0',
        //         'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
        //     }
        // };
        
        fetch('https://dummyjson.com/products')
        .then(res => res.json())
        .then(data=> setCartproduct(data.products));
        
    }, [])
    console.log(CartProduct)

    // https://fakestoreapi.com/products
    // https://api.storerestapi.com/products
   
    const getDefaultCart = () => {
        let cart = {};
        for (let i = 1; i < 31; i++) {
          cart[i] = 0;
        }
        return cart;
    };
    const[Cartitem, setCartItems] = useState(getDefaultCart())
    
    const getTotalCartAmount = () => {
        let totalAmount = 0;
            for (const item in Cartitem) {
                if (Cartitem[item] > 0) {
                let itemInfo = CartProduct.find((product) => product.id === Number(item));
                totalAmount += Cartitem[item] * itemInfo.price;
            }
        }
        return totalAmount;
    };


    const updateCartItemCount = (newAmount, itemId) => {
        setCartItems((prev) => ({...prev, [itemId]: newAmount }))
    }
    
    const addtocart = (itemId) =>{
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }));
    }
    console.log(Cartitem)
    const removetocart = (itemID) =>{
        setCartItems((prev) => ({...prev, [itemID]: prev[itemID]-1 }))
    }

    const ContextValue = {Cartitem, addtocart, removetocart, updateCartItemCount, getTotalCartAmount}

    

  return (<ShopContexts.Provider value={ContextValue}>{props.children}</ShopContexts.Provider>)
  
}

export default ShopContextProvider