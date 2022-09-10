//missions potentielles pour les dev et agences
import React from 'react'

export default function Text() {
  return (
    <div className="text">
        <h2 className='text-center mb-5'>
            Aurore <br/>⭐ intégrateur web ⭐<br/>télétravail
           
        </h2>
        <ul className='service'>
            <li className='d-flex align-items-center my-2'>
                <img src="./assets/icon/aurore-check.png" alt="" />
                <p className='m-0 ps-3 lead'> Intégration de maquettes en HTML CSS JS BOOTSTRAP SASS REACT </p>
            </li>
            <li className='d-flex align-items-center my-2'>
                <img src="./assets/icon/aurore-check.png" alt="" />
                <p className='m-0 ps-3 lead'>Notions en Back-end avec NODE.JS   SEQUELIZE  EXPRESS <br/>avec API et base de données SQL et NoSQL</p>
            </li>   
        </ul>
    </div>
  )
}
