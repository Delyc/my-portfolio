import React from 'react'

function Hire() {
  return (
      <div className='modal-parent'>
          <div className='modal'>
          
        <h1>Hire me</h1>
       
        <div className='why-hire-me'>
        <p className='why-hire-text'>
            WHY HIRE ME? <span>You should hire me for my passion and prven abilities in software develpment. I pride myself on my time management, professional skills and profiecinece in full stack development. Check what my clients say about me and my working projects</span>
        </p>
        <form action="">
            <input type="text" placeholder='Full name'/>
            <input type="email" placeholder='Email' />
            <textarea name="" id="" cols="30" rows="10" value="A short description of your project / work"></textarea>
            <button className='hire-send'>Send</button>
        </form>

        </div>
        
    </div>
      </div>
    
  )
}

export default Hire