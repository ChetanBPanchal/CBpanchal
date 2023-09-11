import React from 'react'
import './home.css'
import homeMainImg from '../../assets/mainimage.jpg'
import { Link } from 'react-scroll'
import btnImage from '../../assets/suitcase.png'

const Home = () => {
  return (
    <section id='home'>
      <div className='homeContent'>
        <span className='hello'>Hello,</span>
        <span className='introtxt'>I'm <span className='introname'>Chetan Panchal</span><br/> <span className='positions'>Android Developer</span></span>
        <p className='intropara'>A Software Developer Skilled in Android Developement <br/> with 4+ Years of hand-on Experience.</p>
        <Link><button className='btn'><img src={ btnImage } alt='Hire me' className='btnimgh'/>Hire me</button></Link>
      </div>
      <img src={homeMainImg} alt='' className='homeMainImg'/>
    </section>
  )
}

export default Home