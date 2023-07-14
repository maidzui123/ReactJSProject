import React from 'react'
import './contact.css'
import { MdEmail } from 'react-icons/md'
import {BsMessenger} from 'react-icons/bs'
import {BsPhone} from 'react-icons/bs'
const Contact = () => {
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>maiduy190802@gmail.com</h5>
            <a href='mailto:maiduy190802@gmail.com'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsMessenger className='contact__option-icon'/>
            <h4>Messenger</h4>
            <h5>Maii Duy</h5>
            <a href='https://m.me/maii.duy'>Send a message</a>
          </article>
          <article className='contact__option'>
            <BsPhone className='contact__option-icon'/>
            <h4>Phone Number</h4>
            <h5>094 713 8821</h5>
            <a href='https://chat.zalo.me'>Get a Zalo</a>
          </article>
        </div>
        {/*End of contact options*/}
        <form action=''>
          <input type='text' name='name' placeholder='Your Full Name' required />
          <input type='email' name='email' placeholder='Your Email' required />
          <textarea name='messsage' rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact