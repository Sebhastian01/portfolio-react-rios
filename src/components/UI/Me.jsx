import React from 'react';
import yojoven from '../../../src/assets/yojoven.jpg';
import './Me.css'

export const Me = () => {
    return (
      <div className="me">
            <h1>I'm Sebastian Rios Aguirre</h1>
        <div className="imgme">
        <img  src={yojoven} alt="sebas" />
        </div>
            <p>This page is a brief overview of my journey as a software developer. It includes some projects I have completed during my time as a student, as well as my contact information in case you are interested in getting in touch with me.</p>
      </div>
    )
  }