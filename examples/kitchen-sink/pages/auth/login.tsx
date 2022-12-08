import React from 'react';
import { Heading, Text, VStack } from '@chakra-ui/react';
import { AuthLayout, LoginAuthForm } from '@giant-squid/user-ui';

const LoginPage = () => {
  return (
    <AuthLayout>
      <VStack alignItems="flex-start" spacing="4">
        <Heading
          borderBottom="solid 5px "
          borderBottomColor="gray.700"
          pb="3"
          width="75%"
        >
          Login
        </Heading>
        <LoginAuthForm />
      </VStack>
    </AuthLayout>
  );
};

export default LoginPage;
