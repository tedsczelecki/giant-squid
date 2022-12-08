import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme/theme';
import { FormProvider } from '@giant-squid/form-ui';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={customTheme}>
      <FormProvider>
        <Component {...pageProps} />
      </FormProvider>
    </ChakraProvider>
  );
}
