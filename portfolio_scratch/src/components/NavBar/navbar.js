import React from 'react'
import './navbar.css'
import logo from '../../assets/logo.png'
import contact from '../../assets/messages.png'
import { Link } from 'react-scroll'
import { PiDownloadBold } from 'react-icons/pi'


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
        <button className='navMenuBtn'> <PiDownloadBold className='downloadicon'/> <p className='downloadtxt'>Download CV</p> </button>
    </nav>
  )
}

export default Navbar