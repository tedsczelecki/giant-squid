import React from 'react';
import { FormControl, FormLabel, Input as ChakraInput } from '@chakra-ui/react';
import { FormComponentProps } from '../../types';

type Props = {
  type?: string;
};

export function Input({
  label,
  type = 'text',
  ...rest
}: FormComponentProps & Props) {
  return (
    <FormControl width="100%">
      {label && <FormLabel htmlFor="email">{label}</FormLabel>}
      <ChakraInput type={type} {...rest} />
    </FormControl>
  );
}
