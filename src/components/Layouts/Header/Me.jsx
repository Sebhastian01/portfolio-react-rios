import React from 'react';
import yojoven from '../../../assets/yojoven.jpg';
import { IntroMe } from '../../UI/IntroMe/IntroMe';
import { MyKnowledge } from '../../UI/myKnowledge/MyKnowledge';
import { MyStudies } from '../../UI/MyStudies/MyStudies';
import './Me.css'

export const Me = () => {
    return (
      <div className="me">
        <section className="imgme">
            <h1>I'm Sebastian Rios Aguirre</h1>
        </section>
        <section className="paragraf">
            <IntroMe/>
            <MyKnowledge/>
            <MyStudies/>
        </section>
      </div>

    )
  }