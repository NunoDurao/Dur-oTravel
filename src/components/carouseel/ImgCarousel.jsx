import React from 'react'
import './ImgCarouselStyles.css'
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import LisbonSunset from '../../assets/lisbon-sunset.jpg'
import AdvanceTown from '../../assets/advancetown.jpg'
import Equador from '../../assets/equador.jpeg'


function ImgCarousel() {
  return (

    <div name='travel' className='container'>
    
    <Carousel className='carousel' showArrows={true} autoPlay={true} infiniteLoop={true}>
    <div>
        <img src={LisbonSunset} alt='/' />
    </div>
    <div>
        <img src={AdvanceTown} alt='/' />
    </div>
    <div>
        <img src={Equador} alt='/' />
    </div>
</Carousel>
    </div>


  )
}

export default ImgCarousel;