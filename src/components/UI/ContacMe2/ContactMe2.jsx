import React from 'react'
import './ContactMe2.css'

export const ContactMe2 = () => {
  return (
    <section className="footer2">
<section className="Data1">
  <div  className="name">
    <label for="Your name">Your name</label>
    <input type="text" placeholder="Full name" id="Name" name="Name" required></input> 
  </div>

  <div className="Email">
    <label for="email">Your Email</label>
    <input type="email"
    placeholder="benitocamelas@example.com" id="email" name="email" required></input>
</div>
</section>
<div className="Message">
  <label for="Message">Message</label>
  <textarea id="comentarios" 
    placeholder="(additional comments)" name="Message" rows="4"></textarea>
    <button>Submit</button>
  </div>
</section>
  )
}
