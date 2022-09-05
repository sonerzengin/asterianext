import React from 'react'
import { Image } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'


function Section2() {
  const { t } = useTranslation()
  return (
    <div className='container section2'>
      <div className='baslik'>{t('common:SPECIALFORYOU')}</div>
      <div className='altbaslik'>{t('common:section2.subtitle')}</div>
      <div>{t('common:section2.text')}</div>
      <div>
        <div className='section2__orangebox'>
            <div>
                <p>{t('common:ACTIVITIES')}</p>
                <p>{t('common:Pleasereviewindetail.')}</p>
            </div>
            <div><Image src='/thin-arrow-png-6.png' className='section2__icon' /></div>
        </div>
        <div className='section2img'>
        <Image src='/section2-img.jpg' />
        </div>
        
      </div>

    </div>
  )
}

export default Section2