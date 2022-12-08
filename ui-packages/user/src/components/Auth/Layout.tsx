import { Box, HStack, useToken, VStack } from '@chakra-ui/react';
import React from 'react';

interface Props {
  children: React.ReactNode;
}

export const AuthLayout = ({ children }: Props) => {
  const [from, to] = useToken('colors', ['primary.600', 'primary.900']);
  return (
    <HStack
      height="100vh"
      width="100vw"
      overflow="hidden"
      justifyContent="center"
      background={`linear-gradient(to right, ${to}, ${from});`}
    >
      <Box flex={1} width="100%" height="100%">
        <Box position="absolute" top={6} left={6} width="250px">
          App Name
        </Box>
      </Box>
      <VStack
        justifyContent="center"
        width="100%"
        maxWidth="600px"
        height="100%"
        p={6}
        position="relative"
        z-index={2}
        background="gray.800"
      >
        <Box
          mx="auto"
          width="100%"
          maxWidth="450px"
          position="relative"
          zIndex={3}
        >
          {children}
        </Box>
      </VStack>
    </HStack>
  );
};
