import React from 'react'
import './work.css'
import Tatpar from '../../assets/tatpar.jpg'
import pmmuday from '../../assets/pmuday.jpg'
import krishi from '../../assets/krishi.png'
import rbsk from '../../assets/rbsk.jpg'
import penn from '../../assets/penn.png'

const Work = () => {
  return (
    <section id='works'>
        <h2 className='worktitle'>My Projects</h2>
        <span className='workDesc' >Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</span>
        <div className='workDiv'>
            <div className='project'>
                    <img className='projImg' src={Tatpar} alt='' />
                    <div className='projContent'>
                        <div className='projectName'>
                            <p>Tatpar Delhi Police</p>
                        </div>
                        <hr/>
                        <span className='showproject'>See Details</span>
                    </div>
            </div>
            
            <div className='project'>
                    <img className='projImg' src={pmmuday} alt='' />
                    <div className='projContent'>
                        <div className='projectName'>
                            <p>PM-UDAY Portal</p>
                        </div>
                        <hr/>
                        <span className='showproject'>See Details</span>
                    </div>
            </div>

            <div className='project'>
                    <img className='projImg' src={krishi} alt='' />
                    <div className='projContent'>
                        <div className='projectName'>
                            <p>Krishi Kisan Application</p>
                        </div>
                        <hr/>
                        <span className='showproject'>See Details</span>
                    </div>
            </div>

            <div className='project'>
                    <img className='projImg' src={rbsk} alt='' />
                    <div className='projContent'>
                        <div className='projectName'>
                            <p>RBSK Mobile app</p>
                        </div>
                        <hr/>
                        <span className='showproject'>See Details</span>
                    </div>
            </div>

            <div className='project'>
                    <img className='projImg' src={penn} alt='' />
                    <div className='projContent'>
                        <div className='projectName'>
                            <p>Penn-Energy Renewable</p>
                        </div>
                        <hr/>
                        <span className='showproject'>See Details</span>
                    </div>
            </div>

        </div>
    </section>
  )
}

export default Work