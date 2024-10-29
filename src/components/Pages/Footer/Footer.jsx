import React from 'react'
import './footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
    <section className="footer1">
      <section className="date">
  <h2>Contact Me</h2>
  
  <div className="Lorem">
  <p>If you want to contact me, here are my details, </p>
  <p>or leave me your information along with a message and I will contact you.</p>
  </div>
  
  <div className="Lorem">
  <p>Email: sriosa01@gmail.com</p>
  <p>Phone: +57 3218885655</p>
  <p>Address: P. Sherman, calle Wallaby, 42, Sydney</p>
  </div>
  </section>

  </section>

  <div className="Message">
  <label className="text" for="Message">Message</label>
  <textarea id="comentarios" placeholder="(additional comments)" name="Message" rows="8"></textarea>
    <button>Submit</button>
  </div>
  </footer>
  )
}
