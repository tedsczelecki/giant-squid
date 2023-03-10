import type { AppProps } from 'next/app';
import { ChakraProvider } from '@chakra-ui/react';
import customTheme from '../theme/theme';
import { FormProvider } from '@giant-squid/form-ui';
import { QueryClient, QueryClientProvider } from 'react-query';
import { SessionProvider } from 'next-auth/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

export default function App({
  Component,
  pageProps: initialPageProps,
}: AppProps) {
  const { session, ...pageProps } = initialPageProps;
  return (
    <QueryClientProvider client={queryClient}>
      <ChakraProvider theme={customTheme}>
        <SessionProvider session={session}>
          <FormProvider>
            <Component {...pageProps} />
          </FormProvider>
        </SessionProvider>
      </ChakraProvider>
    </QueryClientProvider>
  );
}
