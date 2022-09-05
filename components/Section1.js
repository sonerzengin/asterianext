import React from 'react'
import { Image } from '@chakra-ui/react'
import { useTranslation } from 'next-i18next'


function Section1() {
  const { t } = useTranslation()
  return (

    <div className='container section1'>
    <div className="row">
            <div className="col-md-6 section1__left">
            <div className="section1__title">ASTERIA<br/>KREMLIN PALACE</div>
            <div className="section1__subtitle">{t('common:section1.subtitle')}</div>
            <div className="section1__text"><p>{t('common:section1.text1')}</p>
            <p>{t('common:section1.text2')}</p></div>
            </div>
            <div className="col-md-6">
                <Image src='/section1-img.jpg' />
            </div>
      </div>
    </div>
  )
}

export default Section1