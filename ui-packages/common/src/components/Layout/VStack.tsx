import { Box, BoxProps } from '@chakra-ui/react';
import React, { ForwardedRef } from 'react';

type Props = {
  children?: React.ReactNode;
} & BoxProps;

// eslint-disable-next-line react/display-name
export const VStack = React.forwardRef(
  ({ children, ...boxProps }: Props, ref: ForwardedRef<HTMLDivElement>) => (
    <Box
      ref={ref}
      alignItems={boxProps.alignItems ?? 'flex-start'}
      display="flex"
      flexDirection="column"
      gap={boxProps?.gap ?? '5'}
      width="100%"
      {...boxProps}
    >
      {children}
    </Box>
  ),
);
