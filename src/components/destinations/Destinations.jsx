import React from 'react'
import './DestinationsStyles.css'
import America from '../../assets/america.jpg'
import Africa from '../../assets/africa.jpg'
import Asia from '../../assets/asia.jpg'
import Acores from '../../assets/acores.jpg'
import Lisboa from '../../assets/lisboa.jpg'

function Destinations() {
  return (
    <div name='destinations' className='destinations'>
      <div className='container'>
        <h1>All Continents</h1>
        <p>Live a Once-in-a-Lifetime Experience</p>
        <div className='img-container'>
<img className='span-3 image-grid-row-2' src={Lisboa} alt='/'/>
<img src={Acores} alt='/'/>
<img src={Africa} alt='/'/>
<img src={Asia} alt='/'/>
<img src={America} alt='/'/>
        </div>
      </div>
    </div>
  )
}

export default Destinations;