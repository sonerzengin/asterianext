import React from 'react'
import { Image } from '@chakra-ui/react'


function Img() {
  return (
    <div >
        <center>
        <Image src='/desktop-img.jpg' className='asteriahotel__img'  />
        <Image src='/desktop-mobil.jpg' className='asteriahotel__mobilimg' />
        </center>
    </div>
  )
}

export default Img