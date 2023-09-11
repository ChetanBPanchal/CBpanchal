import React from 'react'
import './skill.css'
import appDev from '../../assets/appdevelopment.png'
import apiDev from '../../assets/apidevelopment.png'
import pyScript from '../../assets/scripting.png'

const skill = () => {
  return (
    <section id='skills'>
        <span className='skillTitle'>What I do</span>        
        <span className='skilldesc'>Dedicated and highly skilled Android Developer with over 4 years of experience, proficient in Python development, and a strong background in API development. Seeking a challenging position that allows me to leverage my expertise in creating innovative Android applications while contributing my Python and API development skills to enhance the overall software ecosystem.</span>        
        <div className='skillList'>
            <div className='skillBar'>
                <img src={ appDev} alt='App Developement' className='skillimg'/>
                <div className='skilltext'>
                    <h2>App Developement</h2>
                    <p>I use Kotlin,java, Flutter, Swift and react for Mobile App development.</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={ apiDev} alt='API Development' className='skillimg'/>
                <div className='skilltext'>
                    <h2>Api Developement</h2>
                    <p>I have used Java, PHP, Asp.net for API Developement</p>
                </div>
            </div>

            <div className='skillBar'>
                <img src={pyScript} alt='Python Scripting' className='skillimg'/>
                <div className='skilltext'>
                    <h2>Python Scripting</h2>
                    <p>Using Python/Jython Scripting in Ignition Automation for Scada Component.</p>
                </div>
            </div>

        </div>
    </section>
  )
}

export default skill