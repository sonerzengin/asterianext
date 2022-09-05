import React from 'react'
import { Image } from '@chakra-ui/react'


function Section2() {
  return (
    <div className='container section2'>
      <div className='baslik'>SPECIAL FOR YOU</div>
      <div className='altbaslik'>Please click for more details...</div>
      <div>Asteria Kremlin Palace offers you and your loved ones comfortable accommodation possibilites. Hotel’s location give you the possibility to explore the marvelous Antalya while offering magnificent atmosphere as well as quality service.</div>
      <div>
        <div className='section2__orangebox'>
            <div>
                <p>ACTIVITIES</p>
                <p>Please review in detail.</p>
            </div>
            <div><Image src='/thin-arrow-png-6.png' className='section2__icon' /></div>
        </div>
        <div className='section2img'>
        <Image src='/section2-img.jfif' />
        </div>
        
      </div>

    </div>
  )
}

export default Section2