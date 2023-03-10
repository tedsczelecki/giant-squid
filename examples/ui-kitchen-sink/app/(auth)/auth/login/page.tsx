'use client';
import React from 'react';
import { Button, Heading, VStack } from '@chakra-ui/react';
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { APP_ROOT } from '../../../../constants/paths';

const LoginPage = () => {
  const { data: session } = useSession();
  const router = useRouter();

  if (session?.user) {
    router.push(APP_ROOT);
    return null;
  }
  return (
    <VStack alignItems="flex-start" spacing="4">
      <Heading
        borderBottom="solid 5px "
        borderBottomColor="gray.700"
        pb="3"
        width="75%"
      >
        Login
      </Heading>
      <VStack>
        <Button onClick={() => signIn('google')}>Login with Google</Button>
      </VStack>
    </VStack>
  );
};

export default LoginPage;
