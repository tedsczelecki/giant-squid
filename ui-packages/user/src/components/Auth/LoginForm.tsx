import React from 'react';
import { Form, Schema } from '@giant-squid/form-ui';
import { defaultLoginForm } from '../../constants';
import { HStack, StackDivider, Text, VStack } from '@chakra-ui/react';

type Props = {
  schema?: Schema;
};

export const LoginAuthForm = ({ schema = defaultLoginForm }: Props) => {
  return (
    <VStack width="100%">
      <Form schema={schema} />
      <HStack
        divider={
          <StackDivider
            borderColor="gray.600"
            height="18px"
            transform="translateY(4px)"
          />
        }
        pt="6"
      >
        <Text color="gray.400">
          Don&apos;t have an account? <a href="/auth/register">Register</a>
        </Text>
        <Text color="gray.400">
          <a href="/auth/forgot-password">Forgot password</a>
        </Text>
      </HStack>
    </VStack>
  );
};
