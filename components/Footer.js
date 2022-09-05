import React from 'react'
import { useTranslation } from 'next-i18next'

function Footer() {
    const { t } = useTranslation()
  return (
    <div className='footer'>
    <div className='container'>
        <div className="row">
            <div className="col-md-2"></div>
            <div className="col-md-10 footer__intro">
            
            <div>
                    <ul className='footer__list'>
                        <li>{t('common:HOMEPAGE')}
                        <div className="footer__line"></div>
                        </li>
                        <li>{t('common:RESTAURANTS')}
                        <div className="footer__line"></div>
                        </li>
                        <li>{t('common:SPA&WELLNESS')}
                        <div className="footer__line"></div>
                        </li>
                        <li>{t('common:CONFERENCE')}
                        <div className="footer__line"></div>
                        </li>
                        <li>{t('common:MARRIAGE&HONEYMOON')}
                        <div className="footer__line"></div>
                        </li>
                        <li>{t('common:ACCOMMODATION')}
                        <div className="footer__line"></div>
                        </li>
                        <li>{t('common:ACTIVITIES')}
                        <div className="footer__line"></div>
                        </li>
                        <li>{t('common:ASTERIAKIDSCLUB')}
                        <div className="footer__line"></div>
                        </li>
                        <li>{t('common:SPORT')}
                        <div className="footer__line"></div>
                        </li>
                    </ul>
                </div>
                
            <div className="footer__sub">
            <div >
                    <ul className='footer__list2'>
                        <li>{t('common:FACTSHEET')}
                            <div className="footer__line"></div>
                        </li>
                        <li>{t('common:MULTIMEDIA')}
                        <div className="footer__line"></div>
                        </li>
                        <li>{t('common:PROTECTIONOFPERSONALDATA')}
                        <div className="footer__line"></div>
                        </li>
                        <li>{t('common:AWARDS')}
                        <div className="footer__line"></div>
                        </li>
                        <li>{t('common:CONTACT')}
                        <div className="footer__line"></div>
                        </li>
                    </ul>
                </div>
               
                <div className='footer__bottom'>
                {t('common:©2018AllRightsReserved')}
                </div>
            </div>
            
            </div>
       </div>
      
    </div>
    </div>
  )
}

export default Footer