import React from 'react';
import traveling from '../../../assets/traveling.png';
import pageweb from '../../../assets/pageweb.png';
import atlas from '../../../assets/atlas.png';
import './Proyects.css'

export const Proyects = () => {
  return (
    <>
    <section className="projects">
        <h2>Proyects</h2>
    <section className="container-projects">
       <section className="card">
        <img  src={pageweb} alt="sebas" />
        este proectecot
    </section>

    <section className="card">
        <img  src={traveling} alt="sebas" />
    </section>

    <section className="card">
        <img  src={atlas} alt="sebas" />
    </section> 
    </section>
    </section>
    </>
  )
}