import React from 'react'
import './SelectsStyles.css'
import LisbonSunset from '../../assets/lisbon-sunset.jpg'
import AdvanceTown from '../../assets/advancetown.jpg'
import Philippines from '../../assets/philippines.jpg'
import MontSaintMichel from '../../assets/mont-saint-michel.jpg'
import MoraineLake from '../../assets/moraine-lake.jpg'
import Equador from '../../assets/equador.jpeg'

import SelectsImg from '../selectsImg/SelectsImg'


function Selects() {
  return (
    <div name='views' className='selects'>
    <div className='container'>
    <SelectsImg bgImg={LisbonSunset} text='Portugal' />
    <SelectsImg bgImg={AdvanceTown} text='Australia'/>
    <SelectsImg bgImg={Philippines} text='Philippines'/>
    <SelectsImg bgImg={MontSaintMichel} text='France'/>
    <SelectsImg bgImg={MoraineLake} text='Canada'/>
    <SelectsImg bgImg={Equador} text='Equador'/>


    </div>

    </div>
  )
}

export default Selects