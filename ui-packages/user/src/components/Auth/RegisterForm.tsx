import React from 'react';
import { Form, Schema } from '@giant-squid/form-ui';
import { defaultRegisterForm } from '../../constants';
import { HStack, Text, VStack } from '@chakra-ui/react';

type Props = {
  schema?: Schema;
};

export const RegisterAuthForm = ({ schema = defaultRegisterForm }: Props) => {
  return (
    <VStack width="100%">
      <Form schema={schema} />
      <HStack pt="6">
        <Text color="gray.400">
          Already have an account? <a href="/auth/login">Login</a>
        </Text>
      </HStack>
    </VStack>
  );
};
