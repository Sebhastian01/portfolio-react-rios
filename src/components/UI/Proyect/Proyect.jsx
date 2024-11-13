import React from 'react'
import traveling from '../../../assets/traveling.png';
import pageweb from '../../../assets/pageweb.png';
import atlas from '../../../assets/atlas.png';
import finance from '../../../assets/finance.png';
import store from '../../../assets/store.png';
import form from '../../../assets/form.png';
import './Proyect.css'

export const Proyect = ({imagen, link, parrafo}) => {
    const images = {
    traveling: traveling,
    pageweb: pageweb,
    atlas: atlas,
    finance: finance,
    store:store,
    form:form,
    };

    const imageSrc = images[imagen];

    return (
        <>
        <section className="projects">
            <h2>Proyects</h2>
    
        <section className="container-projects">
    
           <section className="card">
           <div class="card-inner">
            <div className='card-front'>
            <img  src={imageSrc} alt="sebas"/><button>Description</button>
            </div>
            <div className='card-back'>
                <div className='textCard'>
              <p>{parrafo}</p>
                </div>
              <a href={link} target="_blank"><button>See more</button></a>
            </div>
            </div>
        </section>
    
 </section>
    </section>
    </>
    )
}
