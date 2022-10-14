import React from 'react'
import './contact.css'
import{MdOutlineEmail} from 'react-icons/md' 
import{RiMessengerLine} from 'react-icons/ri' 


const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact me</h2>
      <div className="container contact__container">
        <div className="contact__options">
        <article className="contact__option">
          <MdOutlineEmail className='contact__option-icon'/>
          <h4>Email</h4>
          <h5>cgeconomou@hotmail.com</h5>
          <a href="mailto:cgeconomou@hotmail.com" >Send a message</a>
        </article>
        <article className="contact__option">
          <RiMessengerLine className='contact__option-icon'/>
          <h4>Messenger</h4>
          <h5>ΚΩΣΤΑΣ ΟΙΚΟΝΟΜΟΥ</h5>
          <a href="https://m.me/cg.economou">Send a message</a>
        </article>
        </div>
        {/* <form action="">
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send MEssage</button>
        </form> */}
      </div>
    </section>
  )
}

export default Contact