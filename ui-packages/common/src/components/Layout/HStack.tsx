import { Box, StackProps } from '@chakra-ui/react';
import React from 'react';

type Props = {
  children?: React.ReactNode;
} & StackProps;

export function HStack({ children, ...boxProps }: Props) {
  return (
    <Box
      alignItems={boxProps?.alignItems ?? 'center'}
      display="flex"
      flexDirection={boxProps?.flexDirection ?? 'row'}
      gap={boxProps.spacing ?? '4'}
      width="100%"
      {...boxProps}
    >
      {children}
    </Box>
  );
}
