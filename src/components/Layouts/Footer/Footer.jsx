import React from 'react'
import { ContactMe1 } from '../../UI/ContactMe1/ContactMe1'
import { ContactMe2 } from '../../UI/ContacMe2/ContactMe2'
import './Footer.css'

export const Footer = () => {
  return (
    <footer className="footer">
    <section className="footer1">
      <section className="date">
  <ContactMe1/>
  </section>
  
  
  <section className="footer2">
  <ContactMe2/>
  </section>
  </section>
  </footer>
  )
}
