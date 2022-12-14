import '../styles/App.css'
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.css';
import { appWithTranslation } from 'next-i18next';







function MyApp({ Component, pageProps }) {
  return  (
            <ChakraProvider>
              <Component {...pageProps} />
            </ChakraProvider>
          )
}

export default appWithTranslation(MyApp);
