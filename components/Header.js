import { useTranslation } from 'next-i18next';
import React from 'react'
import Hamburger from './Hamburger'
import Logo from './Logo'
import Navbar from './Navbar'

function Header() {
  const { t } = useTranslation('home');
  
  return (
    <div className='header'>
      <div className="container ">
            <div className="row">
                <div className="col-6 col-sm-6 col-md-2"><Logo /></div>
                
                <div className="col-6 col-sm-6 col-md-10 header__content "><Navbar /> <Hamburger />
                </div>
                </div>
      </div>
    </div>
  )
}

export default Header