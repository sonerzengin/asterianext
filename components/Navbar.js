import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuOptionGroup,
  MenuItemOption
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';

import { i18n, useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import Link from 'next/link';



function Navbar() {
  const router = useRouter()
  const { t } = useTranslation()

  return (
    <div className='row '>
        <div className="col-md-3 col-xxl-2 menu__left ">
        <div>
        <Menu>
          <MenuButton
          p={0}
          transition='all 0.2s'
          fontWeight={300}
          fontSize={13}
          _hover={{ fontWeight: 700  }}
          
          >
           {i18n.language} <ChevronDownIcon />
          </MenuButton>
          <MenuList fontSize={13} >
          {router.locales.map((locale) => (
          <MenuOptionGroup type="radio" defaultValue="Turkish">
          <Link href={router.asPath} locale={locale}>
            <MenuItemOption value="">{locale}</MenuItemOption>
          </Link>
          </MenuOptionGroup>
           ))} 
          </MenuList>
          
        </Menu>
        </div>
        <div>
        <Menu>
          <MenuButton
          p={0}
          transition='all 0.2s'
          borderRadius='md'
          fontSize={13}
          _hover={{ fontWeight: 700  }}
          fontWeight={300}
          
          >
           {t('common:OurHotels')}<ChevronDownIcon />
          </MenuButton>
          <MenuList fontSize={13} transition='all 0.2s'>
            <MenuItem>ASTERIA KEMER RESORT</MenuItem>
            <MenuItem>ASTERIA BODRUM RESORT</MenuItem>
            <MenuItem>ASTERIA FAMILY SUNNY BEACH</MenuItem>
            <MenuItem>ASTERIA VENUS DIDIM</MenuItem>
            <MenuItem>ASTERIA ZEUS DIDIM</MenuItem>
            <MenuItem>ASTERIA KREMLIN PALACE</MenuItem>
          </MenuList>
        </Menu>
        </div>
        <div className='menu__line'></div>
        </div>
        <div className="col-md-9 col-xxl-10">
            <ul className='menu__list'>
                
                <li>{t('common:ACCOMMODATION')}</li>
                <li>{t('common:RESTAURANTS')}</li>
                <li>{t('common:ACTIVITIES')}</li>
                <li>{t('common:SPA&WELLNESS')}</li>
                <li>{t('common:CONFERENCE')}</li>
                <li>{t('common:SPORT')}</li>
                
            </ul>
            
        </div>
       
    </div>
  )
}

export default Navbar
