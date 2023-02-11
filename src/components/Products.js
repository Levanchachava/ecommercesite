import React from 'react'
import {useEffect, useState} from 'react'
import EachProduct from './EachProduct'
import products from "./products.css"



function Products() {

    const[product, setProduct] = useState([])

    useEffect(() =>{
    //   const options = {
    //     method: 'GET',
    //     headers: {
    //         'X-RapidAPI-Key': '49b8e74506msh1abb6f2e7928472p17a280jsn5f2d21541da0',
    //         'X-RapidAPI-Host': 'apidojo-hm-hennes-mauritz-v1.p.rapidapi.com'
    //     }
    // };
    
    // fetch('https://apidojo-hm-hennes-mauritz-v1.p.rapidapi.com/products/list?country=us&lang=en&currentpage=0&pagesize=30&categories=men_all&concepts=H%26M%20MAN', options)
    //     .then(response => response.json())
    //     .then(response => console.log(response.results))
    //     .catch(err => console.error(err));
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then(data=> setProduct(data.products));
    }, [])
    console.log(product.id)
  return (
    <div className='all-product'>
        {product.map(((item) => 
            <EachProduct key={item.id} id={item.id} img={item.images} title={item.title} price={item.price} />
        ))}
    </div>
  )
}



export default Products