import React from 'react'
import { Image } from '@chakra-ui/react'


function Section1() {
  return (

    <div className='container section1'>
    <div className="row">
            <div className="col-md-6 section1__left">
            <div className="section1__title">ASTERIA<br/>KREMLIN PALACE</div>
            <div className="section1__subtitle">Travel in time with Asteria Kremlin Palace</div>
            <div className="section1__text"><p>Asteria Kremlin Palace was built inspired by Kremlin Palace in Moscow to give you a chance to feel the magnificent atmosphere and discover the home of the Russian Czars. The hotel is located in one of the most modern resorts of Antalya – Kundu.</p>
            <p>Kundu attracts tourists not only with close location to Antalya city center but also with the beauty of the golden beaches and relaxing atmosphere</p></div>
            </div>
            <div className="col-md-6">
                <Image src='/section1-img.jpg' />
            </div>
      </div>
    </div>
  )
}

export default Section1