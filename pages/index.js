import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

import Head from 'next/head'
import Header from '../components/Header'
import Img from '../components/Img'
import Section1 from '../components/Section1'
import Section2 from '../components/Section2'
import Section3 from '../components/Section3'
import Footer from '../components/Footer'

export default function Home() {
  
  

  return (
    <div className='app'>
      <Head>
        <title>ASTERIA HOTELS</title>
        <meta name="description" content="Asteria Hotels 2022 .All rights reserved" />
        <link rel="icon" href="/asteria-thumbnail.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true"/>
        <link href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;500;600;700;800&display=swap" />
        <link href="https://fonts.googleapis.com/css2?family=Rubik:wght@300;400;500;600;700;800&display=swap" />
      </Head>

      <Header />
      <Img />
      <Section1 />
      <Section2 />
      <Section3 />
      <Footer />
      
    </div>
  )
}

//Index e Locale probs u geciyor
// 
export async function getStaticProps({ locale }) {
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common'])),
      
    },
  };
}