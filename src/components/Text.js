//missions potentielles pour les dev et agences
import React from 'react'

export default function Text() {
  return (
    <div className="text">
        <h2 className='text-center mb-5'>
            Aurore <br/>developpeuse web junior ⭐<br/>
            <span className='fw-bold'>au tarif stagiaire pour accroître mes compétences</span><br/> télétravail  
        </h2>
        <ul className='service'>
            <li className='d-flex align-items-center my-2'>
                <img src="./assets/icon/aurore-check.png" alt="" />
                <p className='m-0 ps-3 lead'> soit en Front-end HTML CSS JS BOOTSTRAP SASS REACT EXPRESS</p>
            </li>
            <li className='d-flex align-items-center my-2'>
                <img src="./assets/icon/aurore-check.png" alt="" />
                <p className='m-0 ps-3 lead'>soit en Back-end avec NODE.JS SEQUELIZE</p>
            </li>
            <li className='d-flex align-items-center my-2 '>
                <img src="./assets/icon/aurore-check.png" alt="" />
                <p className='m-0 ps-3 lead'>avec API et base de données SQL et NoSQL</p>
            </li>
        </ul>
    </div>
  )
}
