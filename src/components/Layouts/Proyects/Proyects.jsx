import React from 'react';
import traveling from '../../../assets/traveling.png';
import pageweb from '../../../assets/pageweb.png';
import atlas from '../../../assets/atlas.png';
import finance from '../../../assets/finance.png';
import store from '../../../assets/store.png';
import form from '../../../assets/form.png';
import './Proyects.css'

export const Proyects = () => {
  return (
    <>
    <section className="projects">
        <h2>Proyects</h2>

    <section className="container-projects">

       <section className="card">
       <div class="card-inner">
        <div className='card-front'>
        <img  src={pageweb} alt="sebas" />
        <a href="https://page-of-me.vercel.app/" target="_blank"><button>See more</button></a>
        </div>
        <div className='card-back'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae facere quo reprehenderit. Ipsam libero dolorum voluptate totam asperiores magnam cum veniam. Quaerat autem nobis eligendi ipsum id rerum ex dolorum.</p>
        </div>
        </div>
    </section>

    <section className="card">
    <div class="card-inner">
    <div className='card-front'>
        <img  src={traveling} alt="sebas" />
        <a href="https://traveling-amber.vercel.app/" target="_blank"> <button>See more</button></a>
        </div>
        <div className='card-back'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae facere quo reprehenderit. Ipsam libero dolorum voluptate totam asperiores magnam cum veniam. Quaerat autem nobis eligendi ipsum id rerum ex dolorum.</p>
        </div>
        </div>
    </section>

    <section className="card">
    <div class="card-inner">
    <div className='card-front'>
        <img  src={atlas} alt="sebas" />
        <a href="https://atlasproject-nu.vercel.app/" target="_blank"> <button>See more</button></a>
        </div>
        <div className='card-back'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae facere quo reprehenderit. Ipsam libero dolorum voluptate totam asperiores magnam cum veniam. Quaerat autem nobis eligendi ipsum id rerum ex dolorum.</p>
        </div>
        </div>
    </section> 

    <section className="card">
    <div class="card-inner">
    <div className='card-front'>
        <img  src={finance} alt="sebas" />
        <a href="https://shopping-cart-eta-five-79.vercel.app/" target="_blank"> <button>See more</button></a>
        </div>
        <div className='card-back'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae facere quo reprehenderit. Ipsam libero dolorum voluptate totam asperiores magnam cum veniam. Quaerat autem nobis eligendi ipsum id rerum ex dolorum.</p>
        </div>
        </div>
    </section> 

    <section className="card">
    <div class="card-inner">
    <div className='card-front'>
        <img  src={store} alt="sebas" />
        <a href="https://personal-finance-lemon.vercel.app/" target="_blank"> <button>See more</button></a>
        </div>
        <div className='card-back'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae facere quo reprehenderit. Ipsam libero dolorum voluptate totam asperiores magnam cum veniam. Quaerat autem nobis eligendi ipsum id rerum ex dolorum.</p>
        </div>
        </div>
    </section> 

    <section className="card">
    <div class="card-inner">
    <div className='card-front'>
        <img  src={form} alt="sebas" />
        <a href="https://formulario-js-brown.vercel.app/" target="_blank"> <button>See more</button></a>
        </div>
        <div className='card-back'>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae facere quo reprehenderit. Ipsam libero dolorum voluptate totam asperiores magnam cum veniam. Quaerat autem nobis eligendi ipsum id rerum ex dolorum.</p>
        </div>
        </div>
    </section> 
    
    </section>
    </section>
    </>
  )
}