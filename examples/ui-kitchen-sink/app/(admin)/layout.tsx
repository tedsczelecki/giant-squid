'use client';
import React from 'react';
import { HStack } from '@giant-squid/common-ui';
import { Sidebar } from '../../components/Global/Sidebar';
import { Box } from '@chakra-ui/react';
import { CommonLayout } from '../../components/Layouts/Common';

type Props = {
  children: React.ReactNode;
};

export default function RootLayout({ children }: Props) {
  return (
    <CommonLayout>
      <HStack>
        <Sidebar />
        <Box flex="1" p="6" minHeight="calc(100vh - 48px)">
          {children}
        </Box>
      </HStack>
    </CommonLayout>
  );
}
