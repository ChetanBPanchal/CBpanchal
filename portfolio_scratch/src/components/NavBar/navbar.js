import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contact from '../../assets/contact.png'
import { Link } from 'react-scroll'

const Navbar = () => {
  return (
    <nav className='navbar'>
        <img src={logo} alt='Logo' className='logo' />
        <div className='navMenu'>
            <Link className='naveMenuListItems'>Home</Link>
            <Link className='naveMenuListItems'>About</Link>
            <Link className='naveMenuListItems'>Portfolio</Link>
            <Link className='naveMenuListItems'>Contact</Link>
        </div> 
        <button className='navMenuBtn'>
            <img src={contact} alt='Contact me' className='navmenuimg' />Contact Me
        </button>
    </nav>
  )
}

export default Navbar