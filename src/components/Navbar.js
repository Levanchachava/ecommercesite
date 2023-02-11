import React from 'react'
import { Link } from 'react-router-dom'
import navbar from './navbar.css'

function Navbar() {
  return (
    <div className='navbar-cont'>
        <Link to="/">Product</Link>
        <Link to="Shop">Shop</Link>
    </div>
  )
}

export default Navbar