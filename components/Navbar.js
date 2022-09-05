import React from 'react';
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,


} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { StyleRegistry } from 'styled-jsx';



function Navbar() {
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
           TR <ChevronDownIcon />
          </MenuButton>
          <MenuList fontSize={14} transition='all 0.2s'>
            <MenuItem>EN</MenuItem>
            <MenuItem>RU</MenuItem>
          </MenuList>
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
                <li>ACCOMMODATION</li>
                <li>RESTAURANTS </li>
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
