import React from 'react';
import { Heading, VStack } from '@chakra-ui/react';
import { AuthLayout, ForgotPasswordAuthForm } from '@giant-squid/user-ui';

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
          Forgot Password
        </Heading>
        <ForgotPasswordAuthForm />
      </VStack>
    </AuthLayout>
  );
};

export default LoginPage;
