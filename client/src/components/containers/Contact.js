import React from 'react'
import location from '../../assets/location.png'
import email from '../../assets/email.png'
import call from '../../assets/call.png'

function Contact() {
  return (
      <div className='parent-contact' id='contact'>
    <div>
        <div className='contact-'>
            <div className='contact-img'>
            <img src={location} alt="" />
            </div>
          
            <div>
                <h3>Location:</h3>
                <p>Kigali, Rwanda</p>
            </div>
        </div>
        <div className='contact-'>
        <div className='contact-img'>
            <img src={email} alt="" />
            </div>
          
            <div>
                <h3>Email:</h3>
                <p>d.twizeyima@alustudent.com</p>
            </div>
        </div>
        <div className='contact-'>
        <div className='contact-img'>
            <img src={call} alt="" />
            </div>
          
            <div>
                <h3>Call:</h3>
                <p>+250781093895</p>
            </div>
        </div>
    </div>

    <div className='contact-form'>
        <form action="">
            <div className='inputs-form'>
                <input type="text" placeholder='Full name' />
                <input type="email" placeholder='Email'/>
            </div>
            <textarea placeholder='message' name="" id="" cols="30" rows="10"></textarea>
            <button>Send Message</button>
        </form>
    </div>
    </div>
  )
}

export default Contact