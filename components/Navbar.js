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
        <div className="col-md-3 col-xxl-2 menu__left navbar">
        <div>
        <Menu>
          <MenuButton
          p={0}
          transition='all 0.2s'
          
          fontSize={14}
          _hover={{ fontWeight: 600  }}
          
          >
           {i18n.language} <ChevronDownIcon />
          </MenuButton>
          <MenuList>
          {router.locales.map((locale) => (
          <MenuOptionGroup type="radio" defaultValue="spanish">
          <Link href={router.asPath} locale={locale}>
            <MenuItemOption value="">{locale}</MenuItemOption>
          </Link>
          </MenuOptionGroup>
           ))} 
          </MenuList>
          {/* {router.locales.map((locale) => (
          <MenuList fontSize={14} transition='all 0.2s' key={locale} w={'10px'}>
            <Link href={router.asPath} locale={locale}>
            <MenuItem >{locale}</MenuItem>
            </Link>
            
          </MenuList>
          ))} */}
          
        </Menu>
        </div>
        <div>
        <Menu>
          <MenuButton
          p={0}
          transition='all 0.2s'
          borderRadius='md'
          fontSize={14}
          _hover={{ fontWeight: 600  }}
          
          
          >
           OUR HOTELS <ChevronDownIcon />
          </MenuButton>
          <MenuList fontSize={14} transition='all 0.2s'>
            <MenuItem>ASTERIA KEMER RESORT</MenuItem>
            <MenuItem>ASTERIA BODRUM RESORT</MenuItem>
            <MenuItem>ASTERIA FAMILY SUNNY BEACH</MenuItem>
            
          </MenuList>
        </Menu>
        </div>
        <div className='menu__line'></div>
        </div>
        <div className="col-md-9 col-xxl-10">
            <ul className='menu__list'>
                
                <li>{t('common:ACCOMMODATION')}</li>
                <li>{t('common:RESTAURANTS')} </li>
                <li>ACTIVITIES</li>
                <li>SPA & WELLNESS</li>
                <li>CONFERENCE</li>
                <li>SPORT</li>
                
            </ul>
            
        </div>
       
    </div>
  )
}

export default Navbar
