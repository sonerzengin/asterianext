import React, { useState } from 'react'
import { IconButton,Button,Flex } from '@chakra-ui/react';
import { HamburgerIcon , CloseIcon } from '@chakra-ui/icons';

function Hamburger() {
    const [display, changeDisplay] = useState('none')

  return (
    <div className='hamburger'>
      <IconButton
          aria-label="Open Menu"
          size="lg"
          
          icon={<HamburgerIcon />}
          onClick={() => changeDisplay('flex')}
        />
        <Flex
            w="100vw"
            zIndex={20}
            h="100vh"
            pos="fixed"
            top="0"
            left="0"
            display={display} 
            bgColor="gray.50"
            overflowY="auto"
            flexDir="column"
           >
        <Flex justify="flex-end">
            <IconButton
            mt={2}
            mr={2}
            aria-label="Open Menu"
            size="md"
            icon={<CloseIcon />}
            onClick={() => changeDisplay('none')}
            />
        </Flex>

        <Flex flexDir="column" align="center">
            
            <Button as="a" variant="ghost" aria-label="ACCOMMODATION" my={5} w="100%">
            ACCOMMODATION
            </Button>
            <Button as="a" variant="ghost" aria-label="RESTAURANTS" my={5} w="100%">
            RESTAURANTS
            </Button>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            ACTIVITIES
            </Button>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            SPA & WELLNESS
            </Button>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            CONFERENCE
            </Button>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            SPORT
            </Button>
            
        </Flex>
        </Flex>
    </div>
  )
}

export default Hamburger