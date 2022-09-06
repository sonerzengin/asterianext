import React from 'react'


var $ = require('jquery');
if (typeof window !== 'undefined') {
   window.$ = window.jQuery = require('jquery');
}

import dynamic from 'next/dynamic';
const OwlCarousel = dynamic(() => import('@ntegral/react-owl-carousel'), {
  ssr: false,
});

import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import { Image } from '@chakra-ui/react';


function Owl() {
  return (
    <div>  
        <div >            
            <OwlCarousel items={5}  
              className="owl-theme"  
              autoplay={true}
              loop  
              nav={false}
              dots={false}
              margin={25} 
              responsive={
                {0:{
                    items:1.7,
                   },
                600:{
                    items:2.5,
                    },
                1000:{
                    items:3.2,
                },    
                1200:{
                    items:5,
                    }}
              }>  
               
               <div className='owl__items'>
                <h3>ASTERIA<br/>BODRUM RESORT</h3>
                <Image className="carousel__img" src= '/asteria-bodrum.jpg' alt='bodrum'/>
                <Image src='/arrow-right.png' className='owl__icon' alt='arrow'/>
                </div>  
               <div className='owl__items'>
               <h3>ASTERIA<br/>KEMER RESORT</h3>
                <Image  className="carousel__img" src= '/asteria-didim.jpg' alt='asteria didim' />
                <Image src='/arrow-right.png' className='owl__icon' alt='arrow'/>
                </div>  
               <div className='owl__items'>
               <h3>ASTERIA<br/>KREMLIN PALACE</h3>
                <Image  className="carousel__img" src= '/asteria-kemer.jpg' alt='asteria kemer'/>
                <Image src='/arrow-right.png' className='owl__icon' alt='arrow'/>
                </div>  
               <div className='owl__items'>
               <h3>ASTERIA<br/>ZEUS DİDİM</h3>
                <Image  className="carousel__img" src= '/asteria-kremlin.jpg' alt='asteria kremlin'/>
                <Image src='/arrow-right.png' className='owl__icon' alt='arrow'/>
                </div>  
               <div className='owl__items'>
               <h3>ASTERIA<br/>VENUS DİDİM</h3>
                <Image className="carousel__img" src= '/asteria-didim2.jpg' alt='asteria didim2'/>
                <Image src='/arrow-right.png' className='owl__icon' alt='arrow'/>
                </div>  
                 
          </OwlCarousel>  
        </div>  
      
    </div>  
  )
}

export default Owl