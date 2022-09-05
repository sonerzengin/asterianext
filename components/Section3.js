import React from 'react'
import { Image } from '@chakra-ui/react'
import Owl from './Owl'

function Section3() {
  
    return (
    <div className='section3'>
        <div className="container">
            <div className="row ">
                <div className="col-md-2 section3__items">
                    <Image className='section3__logo' src='/logo_asteria.png'  />
                    <p>Our Hotels</p>
                </div>
                <div className="col-md-10 section3__owl">
                    <Owl />
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Section3