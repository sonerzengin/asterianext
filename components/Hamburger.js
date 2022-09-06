import React, { useState } from 'react'
import { IconButton,Button,Flex, MenuDivider ,Tag ,Avatar ,TagLabel, Divider, Grid, Heading } from '@chakra-ui/react';
import { HamburgerIcon , CloseIcon } from '@chakra-ui/icons';
import { useTranslation } from 'next-i18next'
import { useRouter } from 'next/router';
import Link from 'next/link';

function Hamburger() {
    const [display, changeDisplay] = useState('none')

    const router = useRouter()
    
    const { t } = useTranslation()
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
            {t('common:ACCOMMODATION')}
            </Button>
            <Button as="a" variant="ghost" aria-label="RESTAURANTS" my={5} w="100%">
            {t('common:RESTAURANTS')}
            </Button>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            {t('common:ACTIVITIES')}
            </Button>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            {t('common:SPA&WELLNESS')}
            </Button>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            {t('common:CONFERENCE')}
            </Button>
            <Button as="a" variant="ghost" aria-label="Contact" my={5} w="100%">
            {t('common:SPORT')}
            </Button>
            
        </Flex>
        <Divider mb={`50px`}/>
            <h2 className='hamburger__language'>{t('common:ChooseYourLanguage')}</h2>
            <Flex justifyContent={'center'} p={'10'} gap={3} textAlign={'center'}>
            {router.locales.map((locale) => (
              <Link href={router.asPath} locale={locale} key={locale}>
            <Tag size='lg' colorScheme={"teal"} p={3} borderRadius='full' >
            
              <TagLabel>{locale}</TagLabel>
            </Tag>
            </Link>
            ))} 
            </Flex>
            
        </Flex>
        
    </div>
  )
}

export default Hamburger