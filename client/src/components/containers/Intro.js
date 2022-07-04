import React from 'react'
import linkedin from '../../assets/linkedin.png'
import github from '../../assets/github.png'
import twitter from '../../assets/twitter.png'
import me from '../../assets/me.jpeg'

function Intro() {
  return (
    <div className='parent-intro'>
    <div className='intro'>
        <h1>Discover my art space</h1>
        <h3>Hi, I am <span>Delyce</span></h3>
        <p> am an open-minded Software Engineer with
a keen interest in creating elegant tech solutions. 
 </p>
<div className='social'>
<img src={linkedin} alt="" />
<img src={github} alt="" />
<img src={twitter} alt="" />
</div>

<div className='buttons'>
    <button className='btn-one'>Hire me</button>
    <button className='btn-two'>Get resume</button>
</div>
    </div>
    <div className='profile'>
        <figure>
            <img src={me} alt="" />
            
        </figure>
    </div>
    </div>
   
  )
}

export default Intro