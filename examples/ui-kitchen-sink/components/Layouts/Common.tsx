import React from 'react';
import customTheme from '../../theme/theme';
import { QueryClient } from 'react-query';
import { QueryClientProvider } from 'react-query';
import { SessionProvider } from 'next-auth/react';
import { FormProvider } from '@giant-squid/form-ui';
import { ChakraProvider } from '@chakra-ui/react';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

type Props = {
  children: React.ReactNode;
};

export const CommonLayout = ({ children }: Props) => {
  return (
    <html lang="en">
      <body className="chakra-ui-dark" style={{ backgroundColor: '#1A202C;' }}>
        <QueryClientProvider client={queryClient}>
          <ChakraProvider theme={customTheme}>
            <SessionProvider>
              <FormProvider>{children}</FormProvider>
            </SessionProvider>
          </ChakraProvider>
        </QueryClientProvider>
      </body>
    </html>
  );
};
