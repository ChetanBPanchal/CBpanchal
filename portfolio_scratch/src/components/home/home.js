import React from 'react'
import './home.css'
import homeMainImg from '../../assets/mainimage.jpg'
import { Link } from 'react-scroll'
import { Button } from 'bootstrap'

const Home = () => {
  return (
    <section id='home'>
      <div className='homeContent'>
        <span className='hello'>Hello,</span>
        <span className='introtxt'>I'm <span className='Introname'>Chetan Panchal</span><br/> Android Developer</span>
        <p className='intropara'>A Software Developer Skilled in Android Developement with 4+ Years of hand-on Experience.</p>
        <Link><button className='btn'><img src='' alt=''/>Hire me</button></Link>
      </div>
      <img src={homeMainImg} alt='' className='homeMainImg'/>
    </section>
  )
}

export default Home